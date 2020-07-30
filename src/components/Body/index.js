import React from 'react';
import { Container, 
          Grid, 
          Coluna, 
          FirstColum, 
          Box, 
          SecondColum, 
           } from './styles';

let title = "Relatórios";

const Body = () => {
  return (
    <>
    <Container>
      <Grid>
        <Coluna>
        <FirstColum>
          <h2>{title}</h2>
          <Box>
            <div>
            <a href="">Todos </a>
            <a href="">Favoritos </a>
            </div>
            <div>
            <a href="">Acidente de Trabalho </a>
            <a href="">AIS Americana </a>
            <a href="">Cuidado de Perto </a>
            <a href="">Hipertensão </a>
            <a href="">Diabetes </a>
            </div>
          </Box>
        </FirstColum>
        </Coluna>
        <Coluna>
        <SecondColum>
          <input tipe="text" placeholder="Procurar..."/>
        </SecondColum>
  
        </Coluna>
      </Grid>
    </Container>
    </>
  );
}

export default Body;