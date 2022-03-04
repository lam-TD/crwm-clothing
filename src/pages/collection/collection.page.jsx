import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ getCollections }) => {
  const { collectionId } = useParams();
  const collection = getCollections(collectionId);
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getCollections: (collectionId) => selectCollection(collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
