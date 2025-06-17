"use client";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";

type MenuItem = {
  id: number;
  url: string;
  displayText: string;
  parentId: number;
  children: MenuItem[]
};

export default function NavBar() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const navbar: any = document.getElementById("nav");

    // Add an event listener to the window's scroll event
    window.addEventListener("scroll", () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Check if the navigation bar has scrolled down by at least 150 pixels
      if (scrollPosition >= 150) {
        // Add a new class to the navigation bar
        navbar.classList.add("sticky-nav");
      } else {
        // Remove the 'sticky-nav' class from the navigation bar
        navbar.classList.remove("sticky-nav");
      }
    });
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/menuitem/parents");
        if(response.data.success){
          console.log(response.data);
          setMenuItems(response.data.data);
        }
         // assuming API returns an array
      } catch (error) {
         if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
       
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();


  }, []);
 
  return (
    <div className="navRow" id="nav">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src="/assets/images/changeit.svg" alt="Change IT" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {loading ? (
                    <></>
                  ) : (
                    menuItems.map((item,index) => (
                      item.children.length>0 ? 
                      <NavDropdown key={index} title={item.displayText} id="basic-nav-dropdown">
                        <h3>
                          <Link href={item.url}>{item.displayText}</Link>
                        </h3>
                        <div className="submenulinks">
                          { item.children && item.children.length > 0 &&
                            
                            item.children.map((child) => (
                            <NavDropdown.Item key={child.id ?? Math.random()} href={child.url ?? '#'}>
                              {child.displayText ?? "Unnamed"}
                            </NavDropdown.Item>
                            ))
                          }
                       </div>
                      </NavDropdown> : <Nav.Link key={index} href={item.url}>{item.displayText}</Nav.Link>
                    ))
                  )}              
             
            </Nav>
            {/* <button className="schedule">Schedule Free Consultation</button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
