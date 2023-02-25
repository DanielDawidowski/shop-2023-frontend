import styled from "styled-components";
import { motion } from "framer-motion";

export const ReviewsStyles = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  margin-top: 10%;
  height: 80vh;
  h1 {
    margin: ${(props) => props.theme.size6} 0;
    @media (max-width: ${(props) => props.theme.breakpoint_small}) {
      padding: ${(props) => props.theme.size1};
    }
  }
  .review__list {
    display: grid;
    padding: ${(props) => props.theme.size1};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      display: flex;
      justify-content: space-between;
    }
    &--item {
      cursor: pointer;
      width: 100%;
      display: flex;
      border: 1px solid ${(props) => props.theme.grey};
      margin-bottom: ${(props) => props.theme.size2};
      border-radius: 13px;
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        margin-right: ${(props) => props.theme.size2};
      }
      img {
        border-radius: 13px 0 0 13px;
        width: 150px;
      }
    }
  }
  .review__item {
    padding: ${(props) => props.theme.size6} ${(props) => props.theme.size2};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      color: ${(props) => props.theme.color};
    }
  }
`;
