//styles
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.darkBlue};
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: lato;
}
`;

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.yellow};
  font-family: gabriela;
  font-weight: 900;
`;

const TakeALook = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.pink};
  margin-top: 30px;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ThemeButton = styled.button`
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
`;

const NotebookWrapper = styled.div`
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

const DeleteButton = styled.button`
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
export {
  Title,
  TakeALook,
  Logo,
  ListWrapper,
  NotebookWrapper,
  GlobalStyle,
  ThemeButton,
  DeleteButton,
};
