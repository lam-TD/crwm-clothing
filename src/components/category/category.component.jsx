import React from "react";
import { useParams } from "react-router-dom";
import { CategoryContainer } from "./category.styles";

const CategoryPage = () => {
  const params = useParams();
  return (
    <CategoryContainer>
      <h2>{params.categoryId}</h2>
    </CategoryContainer>
  );
};

export default CategoryPage;
