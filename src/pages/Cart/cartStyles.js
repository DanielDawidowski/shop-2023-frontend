import styled from "styled-components";
import { motion } from "framer-motion";

export const CartStyles = styled(motion.div)`
  display: grid;
  place-items: center;
  grid-template-areas:
    "a"
    "b";
  margin-top: 10%;
  gap: 2%;
  padding: ${(props) => props.theme.size1};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    grid-template-areas: "a a b";
  }
  .cart__list {
    width: 100%;
    grid-area: a;
    &--item {
      display: flex;
      width: 100%;
      height: 100%;
      border: 1px solid ${(props) => props.theme.grey};
      border-radius: 4px;
      padding: ${(props) => props.theme.size1};
      margin-bottom: ${(props) => props.theme.size1};
      .cart__item--image {
        width: 50px;
        cursor: pointer;
      }
      .cart__item--content {
        display: grid;
        width: 100%;
        padding: 0 ${(props) => props.theme.size2};
        & > * {
          padding: 0 ${(props) => props.theme.size1};
        }
        .cart__content--header {
          display: flex;
          width: 100%;
          justify-content: space-between;
          .cart__content--title {
            display: grid;
            h3 {
              @media (max-width: ${(props) => props.theme.breakpoint_small}) {
                font-size: ${(props) => props.theme.size2};
              }
            }
            h2 {
              cursor: pointer;
              width: 350px;
              @media (max-width: ${(props) => props.theme.breakpoint_small}) {
                font-size: ${(props) => props.theme.size3};
                width: 150px;
              }
            }
          }
        }
      }
      .cart__content--content {
        margin: ${(props) => props.theme.size3} 0;
        display: flex;
        justify-content: space-between;
        .cart__content--counts {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100px;
          li {
            display: flex;
            border: 1px solid ${(props) => props.theme.grey};
            border-radius: ${(props) => props.theme.size1};
            width: 30px;
            height: 30px;
            display: grid;
            place-items: center;
            svg {
              width: 15px;
              height: 15px;
            }

            &:nth-child(1) {
              background: ${(props) => props.theme.red};
              cursor: pointer;
              h3 {
                color: ${(props) => props.theme.white};
              }
            }
            &:nth-child(3) {
              background: ${(props) => props.theme.green};
              cursor: pointer;
            }
          }
        }
        .cart__content--heart {
          svg {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
  .cart__checkout {
    grid-area: b;
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => props.theme.grey};
    border-radius: ${(props) => props.theme.size1};
    padding: ${(props) => props.theme.size2};
    h2 {
      padding: ${(props) => props.theme.size2};
    }
    .cart__checkout--list {
      & > .cart__checkout--item {
        padding: ${(props) => props.theme.size1} 0;
      }
      .cart__checkout--item {
        display: flex;
        justify-content: space-between;
        padding: ${(props) => props.theme.size2};
        &:nth-child(3) {
          background: ${(props) => props.theme.green};
          border-radius: ${(props) => props.theme.size1};
        }
      }
      .btn--checkout {
        width: 100%;
        padding: ${(props) => props.theme.size2};
        margin: ${(props) => props.theme.size2} 0;
        background: ${(props) => props.theme.blue};
        border: none;
        border-radius: ${(props) => props.theme.size1};
      }
    }
  }
`;
