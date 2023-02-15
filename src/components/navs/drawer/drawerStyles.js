import styled from "styled-components";
import { motion } from "framer-motion";

export const DrawerStyles = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.color};
  z-index: 999;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    border-bottom: none;
  }
  .drawer__header {
    display: flex;
    justify-content: space-between;
    border: 1px solid ${(props) => props.theme.color};
    .drawer__close {
      border: 1px solid ${(props) => props.theme.color};
      &:nth-child(1) {
        padding: 4px;
        background: ${(props) => props.theme.green};
      }
      &:nth-child(3) {
        background: ${(props) => props.theme.red};
      }
    }
    .drawer__logo {
      display: grid;
      place-items: center;
    }
  }
  .drawer__content {
    display: grid;
    place-items: center;

    li {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      align-items: center;
      margin: ${(props) => props.theme.size2};
      border-bottom: 1px solid ${(props) => props.theme.color};
      padding: ${(props) => props.theme.size1} ${(props) => props.theme.size6};
      h3 {
        color: ${(props) => props.theme.green};
        font-weight: 700;
      }
    }
  }
`;
