import { GameProvider } from './context/GameContext';
import Router from './Router';
import './styles/App.css';

const App = () => {
  return (
    <GameProvider>
      <Router />
    </GameProvider>
  );
};

export default App;