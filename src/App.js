import React from 'react';
import './App.css';
import Greeting from './Components/GREETING/Greeting';
import MainPage from './Components/MAIN_PAGE/MainPage';

function App() {
  return (
    <div className="App">
      <Greeting></Greeting>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
