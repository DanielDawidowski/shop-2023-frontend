import styled from "styled-components";
import { motion } from "framer-motion";

export const SearchStyles = styled(motion.div)`
  display: grid;
  grid-template-areas:
    "a b"
    "c c";
  width: 100%;
  z-index: 3;
  select {
    height: 45px;
    grid-area: a;
    width: 100%;
    border: 2px solid ${(props) => props.theme.red};
    border-radius: 4px;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      height: 30px;
    }
  }
  input {
    height: 45px;
    max-width: 100%;
    grid-area: b;
    padding: ${(props) => props.theme.size1};
    border: 2px solid ${(props) => props.theme.red};
    border-radius: 4px;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      height: 30px;
      padding: 0 ${(props) => props.theme.size1};
    }
  }
  .search--list {
    grid-area: c;
    position: relative;
  }
  ul {
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      position: absolute;
      width: 100%;
    }
    li {
      width: 100%;
      display: flex;
      border: 1px solid ${(props) => props.theme.color};
      background: ${(props) => props.theme.background};
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        width: 100%;
      }
      img {
        width: 50px;
      }
      div {
        padding-left: ${(props) => props.theme.size1};
      }
    }
  }
`;
