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

{(window.location.href) === "http://localhost:3000/" ? "" : <form>
<select onChange={(event) => toggleNavTheme(event.target.value)}>
  <option value="default">Default Theme</option>
  <option value="white">White Theme</option>
  <option value="dark">Dark Theme</option>
</select>
</form>}


    </div>
  </div>
</NavStyle>










    
);
};

export default NavBar;