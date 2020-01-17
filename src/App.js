import React from 'react';
import './App.css';

import HomePage from './pages/HomePage';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import GamePage from './pages/GamePage';
import HighScoresPages from './pages/HighScoresPage';

function App() {
  return (
    <Router>
      <div className='container'>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/game' component={GamePage} />
        <Route exact path='/highscores' component={HighScoresPages} />
      </div>
    </Router>
  );
}

export default App;
