import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailTop = styled.div`
  h1 {
    display: block;
    margin-left: 25px;
    font-weight: bold;
    margin: 20px;
  }

  img {
    display: flex;
    margin: 20px;
    width: 200px;
    height: 200px;

    :hover {
      cursor: pointer;
    }
  }
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin: 20px;

  p {
    &.description {
      font-size: medium;
      text-align: center;
      margin-top: 60px;
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
    }
  }
`;
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
`;
