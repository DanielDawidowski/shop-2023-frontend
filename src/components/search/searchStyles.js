import styled from "styled-components";
import { motion } from "framer-motion";

export const SearchStyles = styled(motion.div)`
  display: grid;
  grid-template-areas:
    "a b"
    "c c";
  width: 100%;
  select {
    height: 45px;
    grid-area: a;
    width: 100%;
  }
  input {
    height: 45px;
    max-width: 100%;
    grid-area: b;
    padding: ${(props) => props.theme.size1};
  }
  ul {
    grid-area: c;
    li {
      width: 100%;
      display: flex;
      border: 1px solid ${(props) => props.theme.color};
      img {
        width: 50px;
      }
      div {
        padding-left: ${(props) => props.theme.size1};
      }
    }
  }
`;
