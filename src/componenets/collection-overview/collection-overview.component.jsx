import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectorArrayForPreviewMap } from '../../redux/shop-reducer/selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview = ({ collection }) => (
  <div className="collection-overview">
    {collection.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collection: selectorArrayForPreviewMap
});
export default connect(mapStateToProps)(CollectionOverview);
