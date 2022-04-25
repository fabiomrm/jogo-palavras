import { useGame } from 'contexts/GameContext';

export const GameOver = () => {
  const { gameOver, setGameOver, word, playAgain, setPlayAgain } = useGame();
  return (
    <div className="game-over-container">
      <h3>{gameOver.guessedWord ? 'Parabéns!' : 'Não foi dessa vez!'}</h3>
      <h4>Palavra era: {word}</h4>
      <h4>Pontuação: {gameOver.score}</h4>
      <p>Jogar de novo?</p>
      <button onClick={() => setPlayAgain(true)}>SIM</button>
    </div>
  );
};
