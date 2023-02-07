import styled from "styled-components";
import { motion } from "framer-motion";

export const NavStyles = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.red};
`;
