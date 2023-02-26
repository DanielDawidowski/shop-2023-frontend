import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeStyles = styled(motion.section)`
  overflow: hidden;
  .home__hero {
    height: 80vh;
    width: 100%;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      background: ${(props) => props.theme.red};
    }
  }
  .home__scroll--text {
    display: block;
    @media (max-width: ${(props) => props.theme.breakpoint_small}) {
      display: none;
    }
    &.media {
      display: none;
      /* background: limegreen; */
      @media (max-width: ${(props) => props.theme.breakpoint_small}) {
        display: block;
      }
    }
  }
`;
