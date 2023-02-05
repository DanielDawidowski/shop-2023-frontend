import styled from "styled-components";

export const HamburgerMenu = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: none;
  }
  button {
    border: none;
    background: none;
    outline: none;
    width: 60px;
    height: 60px;
    z-index: 100;
    margin-right: -1rem;
    span {
      width: 40px;
      height: 12px;
      display: block;
      background: ${(props) => props.theme.black};
      border-radius: 13px;
      margin: 8px;
    }
  }
`;