import React, { useState } from 'react'
import './styles/navbar.css'

// libraries
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
} from 'reactstrap'
import { Link } from 'react-router-dom'

// components
import LoginModal from './login_modal.jsx'

export default () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
            <Navbar light expand="md">
                
                <NavbarBrand href="/"> 
                    <div className='navbrand'>
                        <img src='./logo.png' style={{height:'20px'}} alt='logo' />
                        &nbsp;
                        Youdium
                    </div>
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                    <Nav className="mr-auto" navbar>

                        <NavItem>
                            <NavLink href="#"></NavLink>
                        </NavItem>
                        
                    </Nav>
                    
                    <LoginModal />
                    
                </Collapse>
            </Navbar>
            </div>
    )
}