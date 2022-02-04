import './App.scss'
import { Route, Link } from 'react-router-dom'
import { Button, Stack, Navbar, Nav, Container } from 'react-bootstrap'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import About from './components/About'
import Contact from './components/Contact'
import ProfilePic from './Picture/Profilephoto.jpeg'
function App() {
  return (
    <div className="App">
      <Navbar expand="lg" sticky="top" className="mb-5" id="navbar">
        <Container fluid>
          <Navbar.Brand className="navbar-logo" href="/">
            Xuyen Hoang
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id="aboutcontact">
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <img
          src={ProfilePic}
          alt="ProfilePic"
          className="rounded-circle  justify-content-center"
          id="profpic"
        />
        <h1>Xuyen Hoang</h1>
        <div>
          <Route path="/" />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </div>
      </main>
      <footer>
        <small>
          <div className="mr-1">
            <Button
              target="_blank"
              href="https://github.com/xhoang21"
              variant="outline-*"
            >
              <BsGithub size={30} className="m-3" />
            </Button>

            <Button
              target="_blank"
              href="https://www.linkedin.com/in/xuyen-hoang/"
              variant="outline-*"
            >
              <BsLinkedin size={30} className="m-3" />
            </Button>

            <Button
              target="_blank"
              href="mailto:xhoang21@gmail.com"
              variant="outline-*"
            >
              <SiGmail size={30} />
            </Button>
          </div>
          &copy; Xuyen Hoang | 2021
        </small>
      </footer>
    </div>
  )
}

export default App
