import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greeting name="David" />
      <Counter />
    </div>
  );
}

export default App;
