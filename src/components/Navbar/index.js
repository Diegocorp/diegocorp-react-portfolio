import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, 
NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'


function Navbar({ toggle }) {
    return (
        <>

            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Diego Sandoval </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign in</NavBtnLink>
                    </NavBtn>
            
                </NavbarContainer>
            </Nav>
 
        </>
    )
}

export default Navbar
