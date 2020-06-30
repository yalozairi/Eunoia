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
      color: purple;
      font-weight: bold;
      font-family: raleway;
    }
  }
`;

export { Title, TakeALook, Logo, ListWrapper, NotebookWrapper, GlobalStyle };
