import styled from "styled-components";
import { motion } from "framer-motion";

export const RecommendStyles = styled(motion.section)`
  height: 100%;
  width: 100%;
  h1 {
    margin: ${(props) => props.theme.size6} 0;
    @media (max-width: ${(props) => props.theme.breakpoint_small}) {
      padding: ${(props) => props.theme.size1};
    }
  }
  .recommend__list--item {
    padding: ${(props) => props.theme.size1};
    span {
      color: ${(props) => props.theme.color};
    }
  }
`;
