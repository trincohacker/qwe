import React from 'react';
import Calculator from './components/Calculator';
import Accordion from './components/Accordion';
import SearchFilter from './components/SearchFilter';
import Counter from './components/Counter';
import './App.css';


function App() {
  return (
    <div className="App">
      <Calculator/>
      <Accordion/>
      <SearchFilter/>
      <Counter/>
    </div>
  );
}

export default App;
