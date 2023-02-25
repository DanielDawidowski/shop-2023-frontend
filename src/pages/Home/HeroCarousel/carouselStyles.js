import styled from "styled-components";
import { motion } from "framer-motion";

export const CarouselStyles = styled(motion.div)`
  display: flex;
  height: 100vh;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    height: 80vh;
  }
  .slideshow {
    position: relative;
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      position: unset;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    &__title {
      position: absolute;
      top: 10%;
      transform: translate(-50%, -50%);
      z-index: 1;

      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        position: unset;
        transform: unset;
        margin-top: ${(props) => props.theme.size6};
        display: grid;
        grid-template-areas:
          "a b"
          "c b"
          "d b";
      }
      svg {
        position: absolute;
        top: -10%;
        right: -5%;
        width: 100px;
        height: 100px;
        z-index: -1;
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          width: 200px;
          height: 200px;
          top: 5%;
          left: 15%;
        }
      }

      h3 {
        font-weight: 700;
        text-align: center;
        width: 80%;
        font-style: italic;
        font-family: "Playfair Display", serif;
        font-size: ${(props) => props.theme.size5};
        text-shadow: -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000,
          1px 1px 0 #000000;
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          width: 100%;
          font-size: ${(props) => props.theme.size6};
          grid-area: a;
        }
      }
      h4 {
        display: none;
        color: ${(props) => props.theme.white};

        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          display: block;
          grid-area: c;
          font-size: ${(props) => props.theme.size5};
          font-family: "Courier New", Courier, monospace;
        }
      }
      &--icons {
        display: none;
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          display: grid;
          margin: ${(props) => props.theme.size2};
          grid-area: b;
        }
        .slideshow__title--icon {
          border: 3px solid ${(props) => props.theme.background};
          border-radius: 13px;
          padding: 0 ${(props) => props.theme.size1};
          margin: ${(props) => props.theme.size1};
          display: grid;
          place-items: center;
          img {
            width: 100px;
            height: 100px;
          }
        }
      }
      &--btn {
        display: none;
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          display: grid;
          margin: ${(props) => props.theme.size2};
          grid-area: d;
        }
        button {
          border: none;
          height: 25px;
          width: 125px;
          border-radius: 13px;
          background: ${(props) => props.theme.background};
          color: ${(props) => props.theme.color};
        }
      }
    }
    &__inner {
      position: relative;
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        overflow: hidden;
      }
      &--item {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: center;
        width: 100%;
        cursor: grab;
        @media (min-width: ${(props) => props.theme.breakpoint_small}) {
          width: 100%;
          height: 100%;
          object-position: top;
          overflow: hidden;
        }
      }
      &--btn {
        position: absolute;
        top: 0;
        font-size: 18px;
        width: 10%;
        height: 100%;
        aspect-ratio: 1 / 1;
        border: none;
        cursor: pointer;
        background: transparent;
        color: ${(props) => props.theme.white};
        display: flex;
        align-items: center;
        @media (max-width: ${(props) => props.theme.breakpoint_small}) {
          display: none;
        }
        &.prevButton {
          left: 5%;
          justify-content: flex-start;
        }
        &.nextButton {
          right: 5%;
          justify-content: flex-end;
        }
      }
    }
  }
`;

// import styled from "styled-components";
// import { motion } from "framer-motion";

// export const CarouselStyles = styled(motion.div)`
//   display: flex;
//   height: 100vh;
//   @media (min-width: ${(props) => props.theme.breakpoint_small}) {
//     height: 80vh;
//   }
//   .slideshow {
//     width: 100vw;
//     aspect-ratio: 1;
//     position: relative;
//     overflow: hidden;
//     display: block;
//     @media (min-width: ${(props) => props.theme.breakpoint_small}) {
//       height: 100%;
//       aspect-ratio: 1 / 1;
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//     }

//     &__title {
//       position: absolute;
//       top: 10%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       color: white;
//       width: 600px;
//       z-index: 1;
//       @media (min-width: ${(props) => props.theme.breakpoint_small}) {
//       }

//       h3 {
//         position: absolute;
//         top: 10%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         color: white;
//         font-size: 48px;
//         font-weight: 700;
//         text-align: center;
//         width: 600px;
//         z-index: 1;
//         @media (min-width: ${(props) => props.theme.breakpoint_small}) {
//         }
//       }
//     }

//     &__inner {
//     }

//     .slides {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       object-position: center;
//       @media (min-width: ${(props) => props.theme.breakpoint_small}) {
//         object-position: top;
//         width: 30vw;
//         right: 0;
//       }
//     }

//     button {
//       padding: 16px;
//       font-size: 18px;
//       width: 64px;
//       aspect-ratio: 1 / 1;
//       border: none;
//       cursor: pointer;
//       text-align: center;
//       color: white;
//       @media (max-width: ${(props) => props.theme.breakpoint_small}) {
//         display: none;
//       }
//     }

//     .prevButton {
//       position: absolute;
//       top: 50%;
//       left: 0;
//       transform: translateY(-50%);
//       width: 15%;
//       height: 100%;
//       background: none;
//       display: flex;
//       justify-content: flex-start;
//       align-items: center;
//     }

//     .nextButton {
//       position: absolute;
//       top: 50%;
//       right: 0;
//       transform: translateY(-50%);
//       width: 15%;
//       height: 100%;
//       background: none;
//       display: flex;
//       justify-content: flex-end;
//       align-items: center;
//     }
//   }
// `;
