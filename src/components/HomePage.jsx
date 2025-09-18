import React from "react";
import MenuSection from "../components/MenuSection";
import { categories, bestsellers } from "../constants/MenuData";


function HomePage() {
  return (
    <>
      <MenuSection sectionTitle="Top Menu" items={categories} />
      <MenuSection sectionTitle="🔥 Bestsellers" items={bestsellers} />
    </>
  );
}

export default HomePage