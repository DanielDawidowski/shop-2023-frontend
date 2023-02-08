import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalStyles = styled(motion.div)`
  .blackdrop {
    position: fixed;
    top: 0;
    background: ${(props) => props.theme.background};
    height: 100vh;
    width: 100vw;
    z-index: 9;
  }

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100vh;
    width: 100%;
    background: ${(props) => props.theme.background};
    .modal--content {
      display: flex;

      .modal--close {
        border: 1px solid ${(props) => props.theme.color};
        padding: ${(props) => props.theme.size1};
        margin: 0;
        width: 45px;
        height: 45px;
      }
    }
  }
`;
