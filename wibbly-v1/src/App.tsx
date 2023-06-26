import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Overlay from './components/UI/Overlay/Overlay';

function App() {
  return (
    <div className="container">
      <Overlay></Overlay>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
