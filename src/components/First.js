import React from 'react'
import { Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap'
const First = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Skateshop</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#Marques">Marques</Nav.Link>
      <Nav.Link href="#Skateboards">Skateboards</Nav.Link>
      <Nav.Link href="#Vétements">Vétements</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default First
