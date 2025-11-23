import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import SelectionPage from './pages/SelectionPage';
import GamePage from './pages/GamePage';
import RulesPage from './pages/RulesPage';
import HighScoresPage from './pages/HighScoresPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const Router = () => {
  const [route, setRoute] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === '/' || route === '') return <HomePage />;
  if (route === '/games') return <SelectionPage />;
  if (route === '/games/easy') return <GamePage mode="easy" />;
  if (route === '/games/normal') return <GamePage mode="normal" />;
  if (route === '/rules') return <RulesPage />;
  if (route === '/scores') return <HighScoresPage />;
  if (route === '/login') return <LoginPage />;
  if (route === '/register') return <RegisterPage />;

  return <HomePage />;
};

export default Router;