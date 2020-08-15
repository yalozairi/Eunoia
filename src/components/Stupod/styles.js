import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";

export const UserStyled = styled.div`
  margin-top: auto;
  margin-bottom: auto;

  p {
    &.helloStyled {
      text-align: center;
      color: ${(props) => props.theme.darkBlue};
    }

    &.usernameStyled {
      text-align: center;
      color: ${(props) => props.theme.lightBlue};
    }
  }
`;

export const LogOutStyled = styled(FiLogOut)`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;
