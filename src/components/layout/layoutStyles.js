import styled from "styled-components";
import { motion } from "framer-motion";

export const LayoutStyles = styled(motion.div)`
  position: relative;
  .sub-category {
    position: absolute;
    display: grid;
    place-items: center;
    width: 100%;
    background: ${(props) => props.theme.green};
    border-bottom: 1px solid ${(props) => props.theme.color};
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    max-width: 1200px;
  }
`;
