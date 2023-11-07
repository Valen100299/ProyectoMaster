import React, { useState } from 'react';
import {
  Collapse,
  Navbar as ReactstrapNavbar, // Rename the imported Navbar component
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
} from 'reactstrap';

const MyNavbar = (args) => { // Rename your custom Navbar component
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <ReactstrapNavbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Jose y Valentina
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>My profile</DropdownItem>
                <DropdownItem>configurations</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Close Sesion</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </ReactstrapNavbar>
    </div>
  );
}

export default MyNavbar; // Export your custom Navbar component with the new name

