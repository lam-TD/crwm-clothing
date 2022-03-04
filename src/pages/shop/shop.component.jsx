import React from "react";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import "./shop.styles.scss";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default connect()(ShopPage);
