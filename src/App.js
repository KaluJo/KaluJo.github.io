import React from 'react';
import '@fontsource-variable/outfit';
import '@fontsource-variable/domine';
import '@fontsource/noto-sans';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Music from './pages/Music';
import Coding from './pages/Coding';
import Art from './pages/Art';
import Random from './pages/Random';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/music" element={<Music />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </Router>
  );
};

export default App;