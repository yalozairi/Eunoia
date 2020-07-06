//styles
import styled, { createGlobalStyle } from "styled-components";

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
`;

export const TakeALook = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.pink};
  margin-top: 30px;
`;

export const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
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

export const NotebookWrapper = styled.div`
  border: ${(props) => props.theme.lightBlue} solid;
  border-width: 100;
  border-radius: 10px;
  margin: 20px;

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

export const DeleteButton = styled.button`
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
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 200px;

    :hover {
      cursor: pointer;
    }
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
    };




`;
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
