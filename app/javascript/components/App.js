import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
  <div>
    <h1>Welcome 👋 to Hello 🌍 World message API</h1>

    <Routes>
      <Route path="/greeting" element={<Greeting />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
    <Greeting />
  </div>
);

export default App;
