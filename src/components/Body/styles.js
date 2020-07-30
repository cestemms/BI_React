import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 30px;
  padding: 0px 22px;
  min-height: 100vh;
  background-color: #F1F5F8;
  background-color: rgba(241, 245, 248, 1);
  flex: 1 1 0%;
  padding-bottom: 2.5rem;

@media (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 100%;
}

&:before {
  content: "";
  width: 100%;
  height: 1px;
  display: block;
}
  
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-gap: 1.5rem;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const Coluna = styled.div`
  
  grid-column: span 12 / span 12;

  @media (min-width: 1024px){
  grid-column: span 3 / span 3;
  }
  @media (min-width: 1600px){
    grid-column: span 2 / span 2;
  }

`;

export const FirstColum = styled.div`
    position: relative;
    transform: translateY(50px);
    -webkit-animation: 0.4s intro-y-animation ease-in-out 0.33333s;
            animation: 0.4s intro-y-animation ease-in-out 0.33333s;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;

    > h2 {
      z-index: 49;
      font-size: 1.125rem;
      font-weight: 500;
      margin-right: auto;
      margin-top: 0.5rem;
      color: #565658;

    }
`;


export const SecondColum = styled(FirstColum)`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    width: 100%;
    position: relative;
    margin-right: auto;
    margin-top: 0.75rem;

    > input {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    border-radius: 0.375rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    width: 100%;
    box-shadow: 0px 3px 20px #0000000b;
    background-color: #fff;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0.375rem;
    position: relative;

    color: #7F9EB9;
    color: rgba(127, 158, 185, 1);

    &:focus {
  outline: 0;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }

  }


`;



export const Box = styled.div`

box-shadow: 0px 3px 20px #0000000b;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.375rem;
  position: relative;
  background-color: #275B91;
  padding: 1.25rem;
  margin-top: 1.5rem;

  > div {
    border-top-width: 1px;
    border-color: #2e51bb;
    border-color: rgba(46, 81, 187, 1);
    margin-top: 1.5rem;
    padding-top: 1.5rem;

  > a {
    display: flex;
    align-items: center;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 0.375rem;
    box-shadow: none;
    color: #fff;
    border-bottom: none;
  }
  }
`;

export const TableBox = styled.table`

z-index: 49;
  opacity: 0;
  position: relative;
  transform: translateY(50px);
  -webkit-animation: 0.4s intro-y-animation ease-in-out 0.33333s;
          animation: 0.4s intro-y-animation ease-in-out 0.33333s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;

  box-shadow: 0px 3px 20px #0000000b;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.375rem;
  position: relative;

  padding: 1.25rem;
  margin-top: 1.25rem;

`;

export const Table = styled.table`

width: 100%;
  text-align: left;

`;
