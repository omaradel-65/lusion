import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import Signin from "./components/login/Signin"
import {BrowserRouter , NavLink , Switch , Route} from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Productss from "./components/shop/Productss";
import Productdetail from "./components/shop/Productdetail";
import Store from "./components/shop/Cartfolder/Store";
import Blog from "./components/Blog/Blog";
import ContactUs from "./components/ContactUs";
import Faqs from "./components/FAQ'S/Faqs";
import Cart from "./components/shop/Cartfolder/Cart";
import Wishlist from "./components/shop/Cartfolder/Wishlist";
import WishlistIcon from "./components/shop/Cartfolder/WishlistIcon";
import Carticon from "./components/shop/Cartfolder/Carticon";
import Checkout from "./components/shop/Cartfolder/Checkout";
import Blogdetail from "./components/Blog/Blogdetail";


import { Provider } from 'react-redux';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Provider store={Store}>
    <BrowserRouter>
    <div className="App">
 <Navbar  light className="navvvv" expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto navyy" navbar>
            <div>
            <NavItem>
              <NavLink className="navlinkk" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlinkk" to="/AboutUs">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlinkk" to="/Productss">Shop</NavLink>
            </NavItem>

            </div>
<div>
<img className="imglogo" src="images/logo-1_8505ef07-bee3-4d82-aaf7-dc2fdb2b7793.png" alt="" />
</div>
            <div>
            <NavItem>
              <NavLink className="navlinkk" to="/ContactUs">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlinkk" to="/Faqs">FAQ's</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlinkk" to="/Blog">Blog</NavLink>
            </NavItem>

            <NavItem>
              <Signin />
              
            </NavItem>
            <Carticon />
            <WishlistIcon />

     
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/AboutUs" component={AboutUs} exact></Route>
      <Route path="/Productss" component={Productss} exact></Route>
      <Route path="/Productss/:id" component={Productdetail} exact></Route>
      <Route path="/Blog" component={Blog} exact></Route>
      <Route path="/Blog/:id" component={Blogdetail} exact></Route>
      <Route path="/ContactUs" component={ContactUs} exact></Route>
      <Route path="/Faqs" component={Faqs} exact></Route>
      <Route path="/Cart" component={Cart} exact></Route>
      <Route path="/Wishlist" component={Wishlist} exact></Route>

      <Route path="/Checkout" component={Checkout} exact></Route>



    </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
