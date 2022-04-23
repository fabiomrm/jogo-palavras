import { useGame } from 'contexts/GameContext';

export const GameOver = () => {
  const {
    gameOver: { guessedWord, score },
    word
  } = useGame();
  return (
    <div className="game-over-container">
      <h3>{guessedWord ? 'Parabéns!' : 'Não foi dessa vez!'}</h3>
      <h4>Palavra era: {word}</h4>
      <h4>Pontuação: {score}</h4>
    </div>
  );
};
