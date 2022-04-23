import './styles.css';
import { Board } from 'components/Board';
import { useGame } from 'contexts/GameContext';
import { GameOver } from 'components/GameOver';
import { Modal } from 'components/Modal';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Word } from 'components/types';
import { requestBackend } from 'utils/requests';
import { AxiosRequestConfig } from 'axios';

export const Home = () => {
  const {
    gameOver: { isGameOver },
    isModalOpen,
    setIsModalOpen
  } = useGame();

  const { register, handleSubmit, setValue } = useForm<Word>();

  const submit = (data: Word) => {
    data.status = false;
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/words',
      data
    };
    requestBackend(config).then((res) => console.log(res.data));
    setValue('name', '');
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          <form className="form" onSubmit={handleSubmit(submit)}>
            <div className="form-input-area">
              <input
                type="text"
                placeholder="Sugira a palavra"
                {...register('name', {
                  required: 'Campo obrigatório',
                  maxLength: 5,
                  minLength: 5
                })}
              />
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
