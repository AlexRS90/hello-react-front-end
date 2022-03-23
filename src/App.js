import React from 'react';
import { Route, Routes } from 'react-router';
import Regards from './components/Home';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Regards />} />
    </Routes>
  </>
);

export default App;
