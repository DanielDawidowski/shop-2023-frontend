import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeStyles = styled(motion.section)`
  .home__hero {
    height: 100vh;
    width: 100%;
    background: ${(props) => props.theme.red};
  }
`;
