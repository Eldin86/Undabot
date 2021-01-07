import React from 'react';
import { NavLink } from 'react-router-dom';

import {Navbar, Nav} from 'react-bootstrap'

import './Navigation.css'

function Navigation() {
    return (
        <Navbar bg="dark" expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                <Nav className="navigation">
                    <Nav.Link as={NavLink} activeClassName="active" to="/" exact>HOME</Nav.Link>
                    <Nav.Link  as={NavLink} activeClassName="active" to="/API/contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navigation