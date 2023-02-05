import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderNav = styled(motion.header)`
  height: 0px;
  width: 100%;
  color: ${(props) => props.theme.red};
  li {
    font-size: 1.5rem;
    font-weight: 700;
    a {
      color: ${(props) => props.theme.red};
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin-top: 1rem;
  }
`;
