import { Routes } from 'components/Routes';
import { AuthContextProvider } from 'contexts/AuthContext';
import { GameContextProvider } from 'contexts/GameContext';

function App() {
  return (
    <AuthContextProvider>
      <GameContextProvider>
        <Routes />
      </GameContextProvider>
    </AuthContextProvider>
  );
}

export default App;
