import 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'


function Header() {

  return (
    <MainHeader>
        <NavLink to="/">
          <img src="./images/Logo-1.png" alt="logo" />
        </NavLink>
        <Navbar/>
      </MainHeader>
  );
}

const MainHeader = styled.header`
padding: 0 5.2rem;
height: 6rem;
background-color: ${({ theme }) => theme.colors.header};
display: flex;
justify-content: space-between;
align-items: center;
background-color: #ff1D58 ;
font-size: 1.5rem;


.logo{
  height: 1px;
  max-width: 2%;
}

`;

export default Header;