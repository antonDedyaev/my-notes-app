import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';

const TopNavbar = () => {
  const switchTheme = () => {
    const currentTheme = document.querySelector('html').dataset.bsTheme;
    const themeToggler = document.getElementById('themeToggler');
    const htmlEl = document.querySelector('html');
    if (currentTheme === 'light') {
      htmlEl.dataset.bsTheme = 'dark';
      themeToggler.innerHTML = 'Light Mode';
    } else {
      htmlEl.dataset.bsTheme = 'light';
      themeToggler.innerHTML = 'Dark Mode';
    }
  };

  return (
    <Navbar className="nav-top" bg="primary" variant="dark" expand="lg">
      <Container className="container-top">
        <Container className="container-top-left">
          <Container className="logo">
            <Navbar.Brand href="/my-notes-app">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z" />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>
              <h1>My Notes</h1>
            </Navbar.Brand>
          </Container>
          <Link to="/my-notes-app" className="button-to-main">
            <Button variant="outline-light">Main Page</Button>
          </Link>
        </Container>
        <Container className="container-top-right">
          <Button
            id="themeToggler"
            variant="secondary"
            size="lg"
            onClick={switchTheme}
          >
            Dark Mode
          </Button>
        </Container>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
