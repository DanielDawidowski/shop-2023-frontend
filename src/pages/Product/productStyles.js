import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductStyles = styled(motion.div)`
  display: grid;
  place-items: center;
  .product {
    width: 100%;
    height: 100%;
    display: grid;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      display: flex;
    }
    & > * {
      margin-bottom: ${(props) => props.theme.size2};
    }
    &__image {
      position: relative;
      width: 100%;
      height: 100%;
      &--back {
        position: absolute;
        left: 0;
        top: 5%;
      }
      img {
        width: 100%;
      }
      &--wishlist {
        position: absolute;
        right: 0;
        top: 5%;
        display: grid;
        place-items: center;
        background: ${(props) => props.theme.background};

        svg {
          width: 37px;
          height: 37px;
        }
      }
    }
    &__content {
      width: 100%;
      height: 100%;
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        margin-top: ${(props) => props.theme.size6};
      }
      & > * {
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          margin-bottom: ${(props) => props.theme.size6};
        }
      }
      &--title {
        padding: 0 ${(props) => props.theme.size1};
        margin: 0 ${(props) => props.theme.size1};
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          padding: ${(props) => props.theme.size1};
        }
        & > * {
          margin-bottom: ${(props) => props.theme.size2};
        }
      }
      &--color {
        background: ${(props) => props.theme.orange};
        border: 1px solid ${(props) => props.theme.orange};
        border-radius: 4px;
        padding: 0 ${(props) => props.theme.size1};
        margin: 0 ${(props) => props.theme.size1};
      }
      &--add {
        padding: 0 ${(props) => props.theme.size1};

        button {
          color: ${(props) => props.theme.background};
          width: 100%;
          border: 1px solid ${(props) => props.theme.green};
          border-radius: 4px;
          background: ${(props) => props.theme.green};
          padding: ${(props) => props.theme.size1} 0;
          margin: ${(props) => props.theme.size1} 0;
          b {
            margin-right: ${(props) => props.theme.size1};
          }
        }
      }
    }
  }
`;
