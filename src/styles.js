//styles
import styled, { createGlobalStyle } from "styled-components";
import {Link, NavLink} from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.darkBlue};
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: lato;
}
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.yellow};
  font-family: gabriela;
  font-weight: 900;
  margin-top: 10px;
`;

export const NotebooksTitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.yellow};
  font-family: gabriela;
  font-weight: 900;
  margin-top: 10px;
`;

export const TakeALook = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.pink};
  margin-top: 30px;
  margin-bottom: -10px;
`;

export const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

export const NavBarLogo = styled.img`
  display: block;
  margin-left: 10px;
  margin-top: 5px;
  height: 40px
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.button};
  border: 2px solid black;
  border-radius: 10px;
  color: ${(props) => props.theme.buttonText};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 15px;
  margin-bottom: 20px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  :hover {
    cursor: pointer;
  }
  :active {
    transform: translateY(4px);
  }
`;

export const NavThemeButton = styled.button`
  background-color: ${(props) => props.theme.button};
  border: 1px solid black;
  border-radius: 10px;
  color: ${(props) => props.theme.buttonText};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: small;
  display: block;
  margin-left: 20px;
  padding: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
  :hover {
    cursor: pointer;
  }
  :active {
    transform: translateY(4px);
  }
`;

export const NotebookWrapper = styled.div`
  border: ${(props) => props.theme.lightBlue} solid;
  border-width: 100;
  border-radius: 10px;
  

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    height: 100px;
    :hover {
      cursor: pointer;
    }
  }

  p {
    &.notebook-name {
      font-size: small;
      text-align: center;
      margin-left: 8px;
      margin-right: 8px;
      font-family: lato;
      color: ${(props) => props.theme.darkBlue};
    }
    &.notebook-price {
      font-size: small;
      text-align: center;
      color: ${(props) => props.theme.purple};
      font-weight: bold;
      font-family: raleway;
    }
  }
`;

export const DeleteButtonStyle = styled.button`
  color: red;
  border: 0px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  background-color: ${(props) => props.theme.backgroundColor};
  :hover {
    background-color: red;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;

export const DetailWrapper = styled.div` 

    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%  
    margin: 20px;

  img {
    margin-left: 20px;
    margin-right: auto;
    width: 200px;
    height: 200px;

    :hover {
      cursor: pointer;
    }
  }
h1{
  margin-left: 25px;
  font-weight: bold;
}
  p {
    
    &.description {
      font-size: medium;
      text-align: center;
      margin-left: 8px;
      margin-right: 8px;
      font-family: lato;
      vertical-align: middle;
      color: ${(props) => props.theme.darkBlue};
    }


    &.price {
      font-size: small;
      text-align: center;
      color: ${(props) => props.theme.purple};
      font-weight: bold;
      font-family: raleway;
      margin-bottom: 25px;
      margin-top: -15px;
    };
`
export const SearchBarStyle = styled.input`
  display: block;
  width: 28%;
  height: 25px;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.searchBorder};
  background-color: ${(props) => props.theme.search};
  color: ${(props) => props.theme.searchText};
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.7em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  :hover {
    cursor: pointer

`


export const LinkStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.darkBlue};
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: lato;
  text-decoration: none;
  padding: 2px 6px 2px 6px;

  :hover {
    text-decoration: underline;
    color: ${(props) => props.theme.lightBlue};
  }


`

export const NavItemStyle = styled(NavLink)`
display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.darkBlue};
  margin-right: 5px;
  font-family: lato;
  text-decoration: none;
  padding: 2px 6px 2px 6px;

  :hover {
    text-decoration: none;
    background-color: #BFc2c2c2;
    border-radius: 7px;
    color: ${(props) => props.theme.lightBlue}
  }

  &.active{
    color: ${(props) => props.theme.lightBlue};
  }

`


export const NavStyle = styled.nav`
background-color: #BFc2c2c2;



`

// export const ThemePicker = styled(select)`
// background-color: green;
// `

;
// :hover {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 100px;
//   width: 100px;
//   opacity: 0;
//   transition: 0.5s ease;
//   background-color: #008cba;
//   opacity: 1;
// }
// &.hover-text {
//   color: white;
//   font-size: 20px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   text-align: center;
// }
