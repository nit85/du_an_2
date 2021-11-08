import React from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from "react-icons/fi";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to='/'>
          <h1>Organic</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Trang chủ
          </NavLink>
          <NavLink to='/product' activeStyle>
            Sản phẩm
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Liên hệ
          </NavLink>
          <NavLink to='/news' activeStyle>
            Tin tức
          </NavLink>
        </NavMenu>
      
        <nav >
<div class="container">
  <a class="navbar-brand" href="https://www.facebook.com/index.php" >
    <FaFacebookF />
  </a>
  <a class="navbar-brand" href="https://www.instagram.com/" >
    <FiInstagram />
  </a>
  <a class="navbar-brand" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJyZWRpcmVjdF9hZnRlcl9sb2dpbiI6Imh0dHBzOi8vZGV2ZWxvcGVyLnR3aXR0ZXIuY29tL2VuL2FwcHMifQ%3D%3D%22%7D" >
    <FaTwitter />
  </a>
</div>

</nav>
        
      </Nav>
    </div>
  );
};

export default Navbar;

