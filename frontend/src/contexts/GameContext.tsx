import { Word } from 'components/types';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { requestBackend } from 'utils/requests';

type GameContextData = {
  keys: string[];
  board: string[][];
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  currentAttempt: {
    attempt: number | string;
    letter: number | string;
  };
  setCurrentAttempt: React.Dispatch<
    React.SetStateAction<{ attempt: number | string; letter: number | string }>
  >;
  handleSelectLetter: (key: string) => void;
  handleDeleteLetter: (key: string) => void;
  handlePressEnter: () => void;
  gameOver: {
    isGameOver: boolean;
    guessedWord: boolean;
    score: number;
  };
  setGameOver: React.Dispatch<
    React.SetStateAction<{ isGameOver: boolean; guessedWord: boolean; score: number }>
  >;
};
const keys = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Ç',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M'
];

const initialData: GameContextData = {
  keys: keys,
  board: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ],
  word: '',
  setWord: () => null,
  currentAttempt: {
    attempt: 0,
    letter: 0
  },
  gameOver: {
    isGameOver: false,
    guessedWord: false,
    score: 5
  },
  setGameOver: () => null,
  setCurrentAttempt: () => null,
  handleSelectLetter: () => null,
  handleDeleteLetter: () => null,
  handlePressEnter: () => null
};

export const GameContext = createContext<GameContextData>(initialData);

type Props = {
  children: React.ReactNode;
};
export const GameContextProvider = ({ children }: Props) => {
  const [word, setWord] = useState<string>(initialData.word);
  const [words, setWords] = useState<Word[]>([]);
  const [board, setBoard] = useState<string[][]>(initialData.board);
  const [currentAttempt, setCurrentAttempt] = useState(initialData.currentAttempt);
  const [gameOver, setGameOver] = useState(initialData.gameOver);

  useEffect(() => {
    requestBackend({ url: '/words' }).then((res) => {
      setWords(res.data);
    });
  }, []);

  useEffect(() => {
    if (words.length > 0) {
      setWord(words[Math.floor(Math.random() * 1000)].name);
      console.log(word);
    }
  }, [words]);

  useEffect(() => {
    if (gameOver.isGameOver) {
      setCurrentAttempt(initialData.currentAttempt);
      const board = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
      ];
      setBoard(board);

      setGameOver({ ...gameOver, isGameOver: false });

      requestBackend({ url: '/words' }).then((res) => {
        setWords(res.data);
      });
    }
  }, [gameOver]);

  const handleSelectLetter = (key: string) => {
    if (currentAttempt.attempt > 4) {
      return;
    }
    const newBoard = [...board];
    newBoard[Number(currentAttempt.attempt)][Number(currentAttempt.letter)] = key;
    setBoard(newBoard);
    setCurrentAttempt({ ...currentAttempt, letter: Number(currentAttempt.letter) + 1 });
  };

  const handleDeleteLetter = () => {
    if (currentAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[Number(currentAttempt.attempt)][Number(currentAttempt.letter) - 1] = '';
    setBoard(newBoard);
    setCurrentAttempt({ ...currentAttempt, letter: Number(currentAttempt.letter) - 1 });
  };

  const handlePressEnter = () => {
    console.log(word);
    console.log(board);
    const wordsArray = words.map((w) => w.name);
    if (currentAttempt.letter < 5) return;

    let userWord = '';
    for (let i = 0; i < 5; i++) {
      userWord += board[Number(currentAttempt.attempt)][i];
    }

    if (wordsArray.includes(userWord.toLowerCase())) {
      setCurrentAttempt({ attempt: Number(currentAttempt.attempt) + 1, letter: 0 });
    } else {
      alert('Palavra não existe no vocabulário do jogo!');
    }

    if (userWord.toLowerCase() === word.toLowerCase()) {
      setTimeout(() => {
        alert('VENCEU!');
        setGameOver({
          score: initialData.gameOver.score - Number(currentAttempt.attempt),
          isGameOver: true,
          guessedWord: true
        });
      }, 100);

      return;
    }
    if (Number(currentAttempt.attempt) === 4 && userWord.toLowerCase() !== word.toLowerCase()) {
      console.log(currentAttempt.attempt);
      setGameOver({ ...gameOver, isGameOver: true, guessedWord: false });
      alert('falhou');
    }
  };

  const value = {
    keys,
    word,
    setWord,
    board,
    setBoard,
    currentAttempt,
    setCurrentAttempt,
    handleSelectLetter,
    handleDeleteLetter,
    handlePressEnter,
    gameOver,
    setGameOver
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const game = useContext(GameContext);

  return game;
};
