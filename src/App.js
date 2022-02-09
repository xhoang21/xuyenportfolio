import './App.scss'
import { Route, Link } from 'react-router-dom'
import { Button, Stack, Navbar, Nav, Container } from 'react-bootstrap'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import About from './Components/About'
import Contact from './Components/Contact'
import ProfilePic from './Picture/Profilephoto.jpeg'
import nomnom from './Picture/Finish.002.jpeg'
import Socap from './Picture/SoCap-3_copy.png'
import logo from './Picture/cover.png'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" sticky="top" className="mb-5" id="navbar">
        <Container fluid className="mx-5 px-5">
          <Navbar.Brand className="navbar-logo " href="/">
            <img src={logo} alt="logo" id="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto m" id="aboutcontact">
              <Link to="/About" className="mx-3 link-dark">
                <strong>About</strong>
              </Link>
              <Link to="/Contact" className="mx-3 link-dark">
                <strong>Contact</strong>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <h1 className="m-3 mb-5">
          <u>Xuyen Hoang</u>
        </h1>
        <img
          src={ProfilePic}
          alt="ProfilePic"
          className="rounded-circle  justify-content-center mb-5"
          id="profpic"
        />
        <div>
          <Route path="/" />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
        </div>
        <br />

        <h2 className="fw-bolder mb-2 mt-3">
          <u>PORTFOLIO</u>
        </h2>
        <div className="mt-3">
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
        <div></div>
        <div className="m-5 pb-5">
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
      </main>
      <footer className="mt-5">
        <small>&copy; Xuyen Hoang | 2021</small>
      </footer>
    </div>
  )
}

export default App
