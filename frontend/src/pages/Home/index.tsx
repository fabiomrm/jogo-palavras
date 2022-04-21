import './styles.css';
import { Board } from 'components/Board';
import { useGame } from 'contexts/GameContext';
import { GameOver } from 'components/GameOver';

export const Home = () => {
  const {
    gameOver: { isGameOver }
  } = useGame();
  return (
    <main className="main-container">
      <div className="board-area">
        <Board />
        {isGameOver && <GameOver />}
      </div>
    </main>
  );
};
