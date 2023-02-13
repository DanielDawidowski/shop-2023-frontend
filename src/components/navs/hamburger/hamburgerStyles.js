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

export const CloseMenu = styled.div`
  padding: ${(props) => props.theme.size1};

  button {
    border: none;
    background: none;
    outline: none;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    transform: rotate(45deg);
    span {
      width: 20px;
      height: 4px;
      display: block;
      background: ${(props) => props.theme.color};
      border-radius: 13px;

      :nth-child(1) {
        transform: rotate(90deg);
        position: absolute;
      }
      :nth-child(2) {
        transform: rotate(180deg);
        position: absolute;
      }
    }
  }
`;
