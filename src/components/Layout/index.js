import React from 'react';
import Header from '../Header/index';
import Body from '../Body';
import { Container } from './styles'

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
      <Body/>
      </Container>
      
    </div>
  );
}

export default App;
