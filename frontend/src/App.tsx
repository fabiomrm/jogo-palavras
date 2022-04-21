import { Routes } from 'components/Routes';
import { GameContextProvider } from 'contexts/GameContext';

function App() {
  return (
    <GameContextProvider>
      <Routes />
    </GameContextProvider>
  );
}

export default App;
