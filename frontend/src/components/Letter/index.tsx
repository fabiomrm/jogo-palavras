import { useGame } from 'contexts/GameContext';

import './styles.css';

type Props = {
  attempt: number;
  position: number;
};
export const Letter = ({ attempt, position }: Props) => {
  const { board, word, currentAttempt } = useGame();

  const letter = board[attempt][position];

  const correctLetterAndPlace =
    letter.length > 0 ? letter.toUpperCase() === word[position].toUpperCase() : '';
  const correctLetter =
    !correctLetterAndPlace && letter !== '' && word.toUpperCase().includes(letter.toUpperCase());

  const isLetterCorrect =
    currentAttempt.attempt > attempt &&
    (correctLetterAndPlace ? 'correct' : correctLetter ? 'wrongPlace' : 'wrong');

  return (
    <div className="letter" id={isLetterCorrect ? isLetterCorrect : ''}>
      {letter}
    </div>
  );
};
