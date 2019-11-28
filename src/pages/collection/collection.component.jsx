import React from 'react';
import { connect } from 'react-redux';
import { selectorCollection } from '../../redux/shop-reducer/selectors';

import CollectionItem from '../../componenets/collection-item/collection-item.componenet';

import './collection.style.scss';

const CollectionPage = ({ match, collectionItem }) => {
  const { title, items } = collectionItem;
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collectionItem: selectorCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
