import styled from "styled-components";
import { motion } from "framer-motion";

export const WishlistStyles = styled(motion.div)`
  display: grid;
  place-items: center;
  margin-top: 10%;
  padding: ${(props) => props.theme.size1};

  .wish__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin-right: ${(props) => props.theme.size1};
    }
  }

  .wish__list {
    width: 100%;
    margin-top: ${(props) => props.theme.size4};

    &--item {
      display: flex;
      width: 100%;
      height: 100%;
      border: 1px solid ${(props) => props.theme.grey};
      border-radius: 4px;
      padding: ${(props) => props.theme.size1};
      margin-bottom: ${(props) => props.theme.size1};
      .wish__item--image {
        width: 50px;
        cursor: pointer;
      }
      .wish__content {
        display: grid;
        width: 100%;
        padding: 0 ${(props) => props.theme.size2};
        & > * {
          padding: 0 ${(props) => props.theme.size1};
        }
        &--top {
          display: flex;
          justify-content: space-between;
          @media (max-width: ${(props) => props.theme.breakpoint_small}) {
            font-size: ${(props) => props.theme.size2};
          }
        }
        &--bottom {
          display: flex;
          justify-content: space-between;
          h2 {
            @media (max-width: ${(props) => props.theme.breakpoint_small}) {
              font-size: ${(props) => props.theme.size3};
            }
          }
          .wish__content--icons {
            display: flex;
            align-items: center;
            .add {
              position: relative;
              cursor: pointer;
              svg {
                width: 35px;
                height: 35px;
                margin-right: ${(props) => props.theme.size1};
              }
              &__amount {
                position: absolute;
                top: -10%;
                right: 15%;
                background: ${(props) => props.theme.red};
                border-radius: 13px;
                font-size: 10px;
                width: 18px;
                height: 18px;
                display: grid;
                place-items: center;
                span {
                  font-weight: 700;
                }
              }
            }
            .bin {
              cursor: pointer;
              svg {
                width: 24px;
                height: 24px;
              }
            }
          }
        }
      }
    }
  }
`;
