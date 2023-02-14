import styled from "styled-components";
import { motion } from "framer-motion";

export const LayoutStyles = styled(motion.div)`
  position: relative;
  .sub__category {
    position: absolute;
    display: grid;
    place-items: center;
    width: 100%;
    background: ${(props) => props.theme.green};
    border-bottom: 1px solid ${(props) => props.theme.color};
    z-index: 999;
    &--inner {
      display: flex;
    }
  }
  .sub__category--inner {
    display: flex;
  }
  .sub__category--card {
    display: grid;
    place-items: center;
    margin: ${(props) => props.theme.size1} ${(props) => props.theme.size6};
    &:hover {
      border: 1px solid ${(props) => props.theme.red};
      border-radius: ${(props) => props.theme.size1};
    }
    img {
      width: 35px;
      height: 35px;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    max-width: 1200px;
  }
`;
