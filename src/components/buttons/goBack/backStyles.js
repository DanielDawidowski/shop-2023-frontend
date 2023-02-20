import styled from "styled-components";
import { motion } from "framer-motion";

export const BackStyles = styled(motion.div)`
  display: grid;
  place-items: center;
  background: ${(props) => props.theme.background};
  padding: ${(props) => props.theme.size1};
  svg {
    width: 20px;
    height: 20px;
  }
`;
