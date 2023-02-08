import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderStyles = styled(motion.header)`
  margin: 0;
  padding: 0;
  .header--inner {
    padding: ${(props) => props.theme.size1};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.color};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      padding: ${(props) => props.theme.size1} 0;
      border-bottom: none;
    }
    .header--genders {
      display: flex;
      @media (max-width: ${(props) => props.theme.breakpoint_small}) {
        display: none;
      }
      .gender {
        :hover h2 {
          background: ${(props) => props.theme.grey};
          color: ${(props) => props.theme.red};
        }
        h2 {
          padding: ${(props) => props.theme.size1};
        }
      }
    }
    .header--icons {
      display: flex;
    }
  }

  /* @media (min-width: ${(props) => props.theme.breakpoint_small}) {
  } */
`;

export const CategoryHeaderStyles = styled(motion.header)`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${(props) => props.theme.color};

  .category__header--inner {
    display: flex;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      justify-content: space-between;
    }
    .category__header--list {
      display: flex;
      width: 100%;
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        padding: ${(props) => props.theme.size1};
      }
      li {
        padding-right: ${(props) => props.theme.size1};
      }
    }

    .category__header--search {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-left: 1px solid ${(props) => props.theme.color};
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        border-left: none;
        justify-content: flex-end;
      }
      & > * {
        padding: ${(props) => props.theme.size1};
      }
    }
  }
`;
