import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;

  padding: 30px;
  color: #fff;
  font-size: 1.2rem;
  background-color: #fafafa;
  border-bottom: 1px solid #fafafa;

  @media (max-width: 800px){
    height: 70px;
  }  
`;

export const LogoContainer = styled.div`
  width: 200px;
  border-right: 1px solid #2a629c;

  >img {
    height: 25px;
    width: 180px;
  }

  @media (max-width: 800px){
    display: none;
  }  
`;


export const Input = styled.input`
  padding-right: 2rem;
  padding: 0.5rem;
  width: 14rem;
  background-color: #D2DFEA;
  border-radius: 50px;
  border: none;
  overflow: visible;
  transition: ease-in-out, width .35s ease-in-out;

  @media (max-width: 600px){
    display: none;
  } 
  
`;

export const ProfileImage = styled.div`
  width: 35.2px;
  height: 35.2px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #777;
  border-radius: 50px;
  
  font-size: 1.5rem;
`;

export const RightDiv = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px){
    width: 120px;
  }
`;

export const MenuContainer = styled(Container)`
  align-items: center;
  justify-content: space-evenly;
  border: none;
  
  @media (min-width: 800px){
    display: none;
  }
`;

export const HiddenMenu = styled(Container)`
  align-items: center;
  justify-content: space-between;

  @media (min-width: 800px){
    display: none;
  } 
`;

export const MobileMenu = styled(Container)`
  border-bottom-width: 1px;
  border-color: #fff;
  border-color: rgba(46, 81, 187, 1);
  margin-top: -1.25rem;
  margin-left: -2rem;
  margin-right: -2rem;
  margin-bottom: 1.5rem;

  @media (min-width: 639px){
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  } 

`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #275B91;
  font-size: 1.2rem;

    height: 55px;
    border: none;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    display: flex;
    align-items: center;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin-right: 0.25rem;
`;
