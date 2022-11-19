import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainBox from "./components/MainBox";
import ValueBox from "./components/ValueBox";

function App() {
  return (
    <div className={'app'}>
        <ValueBox/>
        <div></div>
      <MainBox/>
    </div>
  );
}

export default App;
