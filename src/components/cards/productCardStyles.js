import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductCardStyles = styled(motion.div)`
  display: grid;
  .product__card {
    display: grid;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    &--image {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .product__card--wishlist {
        position: absolute;
        top: 0;
        right: 0;
        padding: ${(props) => props.theme.size2};
        z-index: 1;
        cursor: pointer;
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          top: 5%;
          right: 0;
        }
        svg {
          width: 25px;
          height: 25px;
        }
      }
      .product__card--details {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: ${(props) => props.theme.size2};
        background: ${(props) => props.theme.white_opacity};
        z-index: 1;
        cursor: pointer;
        h3 {
          color: ${(props) => props.theme.black};
        }
      }
    }
    &--content {
      padding: ${(props) => props.theme.size1} 0;
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        padding: ${(props) => props.theme.size1};
      }
      h4 {
        margin-bottom: ${(props) => props.theme.size1};
      }
      h2 {
        margin-bottom: ${(props) => props.theme.size1};
        font-size: ${(props) => props.theme.size3};

        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        }
      }
    }
  }
`;
