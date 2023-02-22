import styled from "styled-components";
import { motion } from "framer-motion";

export const CarouselStyles = styled(motion.div)`
  display: flex;
  height: 100vh;
  .slideshow {
    width: 100vw;
    aspect-ratio: 1;
    position: relative;
    overflow: hidden;

    h3 {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 48px;
      font-weight: 700;
      text-align: center;
      width: 600px;
      z-index: 1;
    }

    .slides {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    button {
      padding: 16px;
      font-size: 18px;
      width: 64px;
      aspect-ratio: 1 / 1;
      border-radius: 32px;
      background-color: #0f0c29;
      border: none;
      cursor: pointer;
      text-align: center;
      color: white;
      @media (max-width: ${(props) => props.theme.breakpoint_small}) {
        display: none;
      }
    }

    button:hover {
      background-color: #24243e;
    }

    .prevButton {
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
    }

    .nextButton {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
    }
  }
`;
