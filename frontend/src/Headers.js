import React, { useState } from 'react';
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
    NavbarText
} from 'reactstrap';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Pagina Inicial</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="">Instruções</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Login</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Menu
                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Pagina 01
                  </DropdownItem>
                                <DropdownItem>
                                    Pagina 02
                  </DropdownItem>
                                <DropdownItem> 
                                   Pagina 03
                  </DropdownItem>
                                <DropdownItem>
                                    Pagina 04
                  </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Voltar</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default Headers;