//styles
import styled from "styled-components";

export const VendorTitle = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.yellow};
  font-family: gabriela;
  font-weight: 900;
  margin-top: 10px;
`;

export const VendorWrapper = styled.div`
  border: ${(props) => props.theme.lightBlue} solid;
  border-width: 100;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 3px;
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
    &.vendor-name {
      font-size: small;
      text-align: center;
      margin-left: 8px;
      margin-right: 8px;
      font-family: lato;
      color: ${(props) => props.theme.darkBlue};
    }
    &.vendor-price {
      font-size: small;
      text-align: center;
      color: ${(props) => props.theme.purple};
      font-weight: bold;
      font-family: raleway;
    }
  }
`;

export const VendorListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
