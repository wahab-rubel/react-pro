import 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { GiEternalLove } from "react-icons/gi"
import { IoIosContact } from "react-icons/io";
import { RiCustomerServiceFill } from "react-icons/ri";
import { RiGalleryFill } from "react-icons/ri";
import { BiSolidLogInCircle } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import styled from 'styled-components'
import { FaFacebook, FaSquareInstagram, FaTwitter, FaYoutube  } from "react-icons/fa6";
function Navbar() {
    const Nav = styled.nav`
    *{
        background: #00FFFF; 
    }
    .navbar-list {
        display: flex;
        gap: 2rem;
        
    }
     
        li{
            list-style: none;  
        }

       .navbar-link{
        text-decoration: none;
        .navbar-link{
            &:hover
            active{
            color: ${({ theme }) => theme.colors.helper};
            } 
        }
       } 
    }
    
    `;

  return (
    <Nav>
        <div className='menuIcon'>
            <ul className='navbar-list'>
                <li>
                    <NavLink className="navbar-link" to="/"><FaHome /> Home</NavLink>
                </li>
                <li>
            <NavLink className="navbar-link" to="/about"><GiEternalLove />About</NavLink>
        </li>
        <li>
        <NavLink className="navbar-link" to="/contact"><IoIosContact />Contact</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/service"><RiCustomerServiceFill />Service</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/Gellary"><RiGalleryFill />Gellary</NavLink>
                    
                </li>
                <li>
                    <NavLink className="navbar-link" to="/Login"><BiSolidLogInCircle />Login</NavLink>
                    
                </li>
                <li>
                <a className='social' href="https://www.facebook.com/MAWRUBEL">< FaFacebook/></a>
                </li>
                <li>
                <a className='social' href="https://www.facebook.com/MAWRUBEL"><FaSquareInstagram /></a>
                </li>
                <li>
                <a className='social' href="https://www.facebook.com/MAWRUBEL"><FaYoutube/></a>
                </li>
                <li>
                <a className='social' href="https://www.facebook.com/MAWRUBEL"><FaTwitter/></a>
                </li>
                <li className='search'>
                <a href="#"><i><FaSearch /></i></a>
                </li>
                
                
            </ul>
        </div>
    </Nav>
    

  )
}



export default Navbar