import { useGame } from 'contexts/GameContext';
import { useCallback, useEffect } from 'react';

export const Keyboard = () => {
  const { handleDeleteLetter, handleSelectLetter, handlePressEnter, keys } = useGame();

  const handleKeyBoardEvent = useCallback(
    (event: any) => {
      if (event.key === 'Enter') {
        handlePressEnter();
      } else if (event.key === 'Backspace') {
        handleDeleteLetter(event.key);
      } else {
        keys.forEach((key) => {
          if (String(event.key).toUpperCase() === key.toUpperCase()) {
            handleSelectLetter(key);
          }
        });
      }
    },
    [handlePressEnter, handleDeleteLetter, handleSelectLetter, keys]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyBoardEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyBoardEvent);
    };
  }, [handleKeyBoardEvent]);

  return <div onKeyDown={handleKeyBoardEvent}></div>;
};
