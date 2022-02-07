import './App.scss'
import { Route, Link } from 'react-router-dom'
import { Button, Stack, Navbar, Nav, Container } from 'react-bootstrap'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import About from './components/About'
import Contact from './components/Contact'
import ProfilePic from './Picture/Profilephoto.jpeg'
import nomnom from './Picture/Finish.002.jpeg'
import Socap from './Picture/SoCap-3_copy.png'
function App() {
  return (
    <div className="App">
      <Navbar expand="lg" sticky="top" className="mb-5" id="navbar">
        <Container fluid>
          <Navbar.Brand className="navbar-logo " href="/">
            <p className="font-weight-bold">Xuyen Hoang</p>
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
        <br />

        <h2 className="fw-bolder">PORTFOLIO</h2>
        <div>
          <Button
            target="_blank"
            href="https://nom-nom-recipes-1018.herokuapp.com/"
            variant="outline-*"
          >
            <p className="font-italic fw-bold">NomNom</p>
            <img src={nomnom} alt="nomnom" className="rounded " id="nomnom" />
          </Button>
          <Button
            target="_blank"
            href="http://shtsxh.herokuapp.com/"
            variant="outline-*"
          >
            <p className="font-italic fw-bold">SoCap</p>
            <img src={Socap} alt="Socap" className="rounded " id="nomnom" />
          </Button>
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
