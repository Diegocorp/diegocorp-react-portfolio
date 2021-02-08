import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
}
     from './SidebarElements'

function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen = { isOpen } onClick={ toggle }>
            <Icon onClick={toggle}>
              <CloseIcon/>
            </Icon>
            <SidebarWrapper> 
                <SidebarMenu>
                    <SidebarLink to="about" onClick={ toggle }>
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" onClick={ toggle }>
                        About
                    </SidebarLink>
                    <SidebarLink to="services" onClick={ toggle }>
                        Services
                    </SidebarLink>
                    <SidebarLink to="proyects" onClick={ toggle }>
                        Projects
                    </SidebarLink>
                </SidebarMenu>
{/*                 <SideBtnWrap>
                    <SidebarRoute to="/signin"> Sign In </SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
