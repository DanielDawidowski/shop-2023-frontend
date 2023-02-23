import styled from "styled-components";
import { motion } from "framer-motion";

export const SliderStyles = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  margin-top: 10%;
  .carousel {
    cursor: grab;
    background: ${(props) => props.theme.red};

    &__inner {
      display: flex;

      &--item {
        min-width: 200px;
        min-height: 250px;
        padding: ${(props) => props.theme.size2};
        background: ${(props) => props.theme.green};
        pointer-events: none;
        div {
          background: ${(props) => props.theme.blue};
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
