import React from 'react';
import GlobalStyle from './styles/globas';
import Header from './components/Header'
import Body from './components/Body'

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
