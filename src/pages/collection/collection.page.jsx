import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ getCollections }) => {
  const { collectionId } = useParams();
  const collection = getCollections(collectionId);
  return (
    <CollectionPageContainer>
      <CollectionTitle>{collection.title}</CollectionTitle>
      <CollectionItemsContainer>
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state) => ({
  getCollections: (collectionId) => selectCollection(collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
