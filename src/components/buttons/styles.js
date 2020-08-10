//styles
import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";

export const HoverButton = styled(BsPlusCircle)`
  :hover {
    cursor: pointer;
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

export const UpdateButtonStyled = styled.button`
  color: ${(props) => props.theme.darkBlue};
  border: 0px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  :hover {
    background-color: ${(props) => props.theme.darkBlue};
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;

export const AuthButtonStyled = styled.button`
background-color: ${(props) => props.theme.button};
border: 1px solid black;
border-radius: 5px;
color: ${(props) => props.theme.buttonText};
padding: 2px 5px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 12px;
margin-right: 10px;
display: block;
:hover {
  cursor: pointer;
}
:active {
  transform: translateY(4px);
}

`;