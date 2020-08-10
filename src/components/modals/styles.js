import styled from "styled-components"


export const ModalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "40%",
    },
  };


export const AuthModalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "50%",
    },
  };


export const CreateButtonStyled = styled.button`
color: ${(props) => props.theme.backgroundColor};
background-color: ${(props) => props.theme.mainColor};

&:hover {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const AuthFormLabel = styled.label`
    margin-top: 15px;
    margin-bottom: -3px;

`;