import React from 'react';
import '@fontsource-variable/outfit';
import '@fontsource-variable/domine';
import '@fontsource/noto-sans';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Music from './pages/Music';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Router>
  );
};

export default App;