import styled from "styled-components";
import { motion } from "framer-motion";

export const WishlistStyles = styled(motion.div)`
  display: grid;
  place-items: center;
  background: ${(props) => props.theme.background};
  svg {
    width: 37px;
    height: 37px;
  }
`;
