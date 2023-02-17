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

  .main__filters {
    grid-area: a;
    background: ${(props) => props.theme.green};
    padding-top: ${(props) => props.theme.size6};
    padding: ${(props) => props.theme.size6} ${(props) => props.theme.size3} 0
      ${(props) => props.theme.size3};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      /* display: grid; */
    }

    .filter__option {
      h3 {
        font-weight: 700;
      }
      &--item {
        input[type="radio"],
        input[type="checkbox"] {
          margin-right: ${(props) => props.theme.size2};
        }
      }
    }
  }

  .main__shop {
    grid-area: b;
    background: ${(props) => props.theme.red};
    padding: ${(props) => props.theme.size1};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      padding: ${(props) => props.theme.size6};
    }
    &--inner {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
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
    .bar-inner {
      z-index: 0;
    }
    .bar-inner-left {
      background: ${(props) => props.theme.red};
    }
    .bar-inner-right {
      background: ${(props) => props.theme.red};
      border: none;
    }
    .thumb {
      z-index: 1;
    }
  }
`;
