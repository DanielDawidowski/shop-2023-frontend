import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderStyles = styled(motion.header)`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${(props) => props.theme.color};

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    border-bottom: none;
  }

  .header--inner {
    padding: ${(props) => props.theme.size1};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      padding: ${(props) => props.theme.size1} 0;
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
      svg {
        width: 35px;
        height: 35px;
      }
      .header__heart {
        position: relative;

        svg {
          width: 30px;
          height: 30px;
        }
        span {
          font-size: ${(props) => props.theme.size2};
          display: grid;
          place-items: center;
          b {
            position: absolute;
            top: 22%;
            color: ${(props) => props.theme.white};
          }
        }
      }
      .header__cart {
        position: relative;
        &--amount {
          position: absolute;
          top: -5%;
          right: -5%;
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
      width: 100%;
      display: none;
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        padding: 0;
        display: flex;
      }
      li {
        margin-right: ${(props) => props.theme.size1};
        :hover h3 {
          background: ${(props) => props.theme.red};
          color: ${(props) => props.theme.grey};
          font-weight: 700;
          border-radius: 4px 4px 0 0;
        }
        h3 {
          padding: ${(props) => props.theme.size1};
        }
      }
    }

    .category__header--search {
      display: none;
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 0 0 ${(props) => props.theme.size1};
        border-radius: 4px;
      }
      svg {
        cursor: pointer;
        padding: ${(props) => props.theme.size1} 0
          ${(props) => props.theme.size1} ${(props) => props.theme.size1};
      }
      h3 {
        font-weight: 700;
        cursor: pointer;
      }
    }
    .category__header--search.media--query {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-left: none;
      justify-content: flex-end;
      border-left: 1px solid ${(props) => props.theme.color};
      @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        display: none;
      }
      h3 {
        font-weight: 700;
        color: ${(props) => props.theme.red};
      }
    }
  }
`;
