import styled from "styled-components";
import { motion } from "framer-motion";

export const ShopStyles = styled(motion.section)`
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas:
    "a a"
    "b b";

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    grid-template-columns: 20% 80%;
    grid-template-areas:
      "a b"
      "a b";
  }

  .main-filters {
    grid-area: a;
    background: ${(props) => props.theme.green};
    padding-top: ${(props) => props.theme.size6};
  }

  .main-shop {
    grid-area: b;
    background: ${(props) => props.theme.red};
  }

  .multi-range-slider {
    box-shadow: none;
    border: none;
    .min-caption {
      background: ${(props) => props.theme.red};
    }
    .max-caption {
      background: ${(props) => props.theme.red};
    }
    .bar-inner-left {
      background: ${(props) => props.theme.red};
    }
    .bar-inner-right {
      background: ${(props) => props.theme.red};
      border: none;
    }
  }
`;
