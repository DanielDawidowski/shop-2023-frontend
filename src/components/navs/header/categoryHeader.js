import React, { useState } from "react";
import { CategoryHeaderStyles } from "./headerStyles";
import { Container } from "../../layout/layoutStyles";
import Hamburger from "../hamburger/hamburger";
import { Icon } from "../../../components/globalStyles/icon";
import CategoryList from "./categoryList";

function CategoryHeader({
  toggleMenu,
  setToggleMenu,
  setShowModal,
  setHovered,
  setSubCategory,
}) {
  return (
    <CategoryHeaderStyles>
      <Container>
        <div className="category__header--inner">
          <div className="category__header--hamburger">
            <Hamburger setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
          </div>
          <ul className="category__header--list">
            <CategoryList
              setHovered={setHovered}
              setSubCategory={setSubCategory}
            />
          </ul>
          <div className="category__header--search">
            <h3>Search</h3>
            <Icon noborder="false" viewBox="0 0 16 16">
              <path d="m14.91 13.09-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15 5.34 5.34 0 0 0 5.5 5.15 5.71 5.71 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9 4.09 4.09 0 0 1 4.25-3.9 4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11z" />
            </Icon>
          </div>
          <div
            className="category__header--search media--query"
            onClick={() => setShowModal(true)}
          >
            <h3>Search</h3>
            <Icon noborder="false" viewBox="0 0 16 16">
              <path d="m14.91 13.09-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15 5.34 5.34 0 0 0 5.5 5.15 5.71 5.71 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9 4.09 4.09 0 0 1 4.25-3.9 4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11z" />
            </Icon>
          </div>
        </div>
      </Container>
    </CategoryHeaderStyles>
  );
}

export default CategoryHeader;
