import React from 'react';
import {Link} from "react-router-dom";

//styles
import {NavBarLogo, NavStyle, NavItemStyle} from "../styles";

//logo
import logo from "../logo.png";

const NavBar = ({toggleNavTheme}) => {

return (
   
<NavStyle className="navbar navbar-expand">
<Link className="navbar-brand" to="/">
<NavBarLogo alt="logo" src={logo} />
</Link>
  
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
<NavItemStyle className="nav-item" to="/notebooks">

Notebooks

</NavItemStyle>

<select className="nav-item" className="custom-select-sm">

  <option selected>Pick your Theme!</option>

  <option value="1" onClick={() => toggleNavTheme("default")}>Default Theme</option>
  <option value="2" onClick={() => toggleNavTheme("white")}>White Theme</option>
  <option value="3" onClick={() => toggleNavTheme("dark")}>Dark Theme</option>
</select>

    </div>
  </div>
</NavStyle>










    
);
};

export default NavBar;