import './styles.css';
import { Board } from 'components/Board';
import { useGame } from 'contexts/GameContext';
import { GameOver } from 'components/GameOver';
import { Modal } from 'components/Modal';
import { useState } from 'react';

export const Home = () => {
  const {
    gameOver: { isGameOver }
  } = useGame();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log('oi');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="main-container">
      <div className="board-area">
        <Board />
        {isGameOver && <GameOver />}
        <div className="suggestion-area">
          <button onClick={handleOpenModal}>SUGERIR PALAVRA</button>
        </div>
        <Modal onClose={handleCloseModal} visible={isModalOpen}>
          <form className="form">
            <div className="form-input-area">
              <input type="text" placeholder="Sugira a palavra" />
            </div>
            <div className="form-button-area">
              <button>ENVIAR</button>
            </div>
          </form>
        </Modal>
      </div>
    </main>
  );
};
