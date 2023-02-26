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
    grid-template-areas: "a b";
  }

  .filters {
    grid-area: a;
    padding: ${(props) => props.theme.size4} ${(props) => props.theme.size2}
      ${(props) => props.theme.size2} ${(props) => props.theme.size2};

    .filters__title {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-weight: 700;
      }
      svg {
        width: 25px;
        height: 25px;
      }
      div {
        display: grid;
        place-items: center;
      }
    }

    .filters__main {
      display: grid;
      &--content {
        padding: 0 ${(props) => props.theme.size2};
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          padding: 0;
        }
        .filter__option {
          display: grid;
          padding: ${(props) => props.theme.size2} 0;
          h3 {
            font-weight: 700;
          }
          &--item {
            display: flex;
            input[type="radio"],
            input[type="checkbox"] {
              margin-right: ${(props) => props.theme.size2};
              display: grid;
              place-content: center;
            }

            input[type="radio"]::before {
              content: "";
              width: ${(props) => props.theme.size2};
              height: ${(props) => props.theme.size2};
              border-radius: 50%;
              transition: 120ms transform ease-in-out;
            }

            input[type="radio"]:checked::before {
              transform: scale(1.1);
              font-weight: 700;
            }

            input[type="checkbox"]::before {
              content: "";
              width: ${(props) => props.theme.size2};
              height: ${(props) => props.theme.size2};
              transform: scale(0);
              transition: 120ms transform ease-in-out;
            }

            input[type="checkbox"]:checked::before {
              transform: scale(1);
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  .main__shop {
    grid-area: b;
    padding: ${(props) => props.theme.size1};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      padding: ${(props) => props.theme.size6};
    }
    &--inner {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(2, 1fr);
      gap: 1%;
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
