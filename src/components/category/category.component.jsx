import React from "react";
import { useParams } from "react-router-dom";
const CategoryPage = () => {
    const params = useParams();
    console.log(params);
  return (
    <div className="category-page">
      <h2>{params.categoryId}</h2>
    </div>
  );
};

export default CategoryPage;
