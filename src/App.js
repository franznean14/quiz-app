import React from 'react';
import './App.css';

import { HomePage, GamePage, HighScoresPage } from './pages/';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container'>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/game' component={GamePage} />
        <Route exact path='/highscores' component={HighScoresPage} />
      </div>
    </Router>
  );
}

export default App;
