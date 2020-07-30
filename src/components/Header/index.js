import React from 'react';
import { Container, 
          Input, 
          ProfileImage, 
          LogoContainer, 
          RightDiv, 
          MenuContainer,
          Button,
          HiddenMenu } from './styles';
import Logo from '../../assets/logo.png';
import SmallLogo from '../../assets/logo-hexagono-small.png';

import { BsArrowRightShort} from 'react-icons/bs'
import { FaRegBell} from 'react-icons/fa';
import { TiUser } from 'react-icons/ti';
import { RiMenu3Line } from 'react-icons/ri'


//passa do backend
var menu = "BI";
var aba = "Dashboard";

const Header = () => {
  return (
    <>
    <HiddenMenu>
      <img src={SmallLogo} alt="Healthbit"/>
      <RiMenu3Line/>
    </HiddenMenu>
    <Container>
      <RightDiv>
        <LogoContainer>
          <img src={Logo} alt="Healthbit"/>
        </LogoContainer>
          <p>{menu} <BsArrowRightShort/> {aba}</p>
      </RightDiv>
      
      <RightDiv>
        <Input placeholder="Procurar..."/>
        <FaRegBell/>
        <ProfileImage>
          <TiUser/>
        </ProfileImage>
      </RightDiv>
    </Container>
    <MenuContainer>
      <Button>
        {menu}
      </Button>
    </MenuContainer>
    </>
  );
}

export default Header;
