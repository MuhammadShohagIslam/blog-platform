import React from "react";
import {
    Container,
    Navbar,
    Nav,
    Figure,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import classes from "./Header.module.css";
import Logo from "../../../images/eduTech.png";

const Header = () => {
    return (
        <>
            <Navbar
                className={classes.navBar}
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand className={classes.logo}>
                            <Figure.Image
                                width={30}
                                height={30}
                                alt="logo"
                                roundedCircle
                                src={Logo}
                            />
                            BlogPlatform
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className={`${classes.centerNavbar} d-flex justify-content-between align-items-center`}
                        >
                            <div className={classes.navItemMiddle}>
                                <LinkContainer to="/">
                                    <Nav.Link className={classes.navLink}>
                                        Home
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/blogs">
                                    <Nav.Link className={classes.navLink}>
                                        Blogs
                                    </Nav.Link>
                                </LinkContainer>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
