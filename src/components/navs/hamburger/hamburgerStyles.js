import styled from "styled-components";

export const HamburgerMenu = styled.div`
  padding: ${(props) => props.theme.size1};

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: none;
  }

  button {
    border: none;
    background: none;
    outline: none;
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    span {
      width: 20px;
      height: 4px;
      display: block;
      background: ${(props) => props.theme.color};
      border-radius: 13px;
      margin: 4px;
      :nth-child(2) {
        width: 10px;
        height: 4px;
      }
    }
  }
`;
