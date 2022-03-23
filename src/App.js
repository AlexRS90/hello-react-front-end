import React from 'react';
import { Route, Routes } from 'react-router';
import Greeting from './components/Greeting';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Greeting />} />
    </Routes>
  </>
);

export default App;
