import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import "./shop.styles.scss";
import CollectionPage from "../collection/collection.page";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route index path="/" element={<CollectionOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );  
};

export default connect()(ShopPage);
