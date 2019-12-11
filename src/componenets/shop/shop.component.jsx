import React, { useEffect } from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { startFetch } from '../../redux/shop-reducer/shop-actions';

import CollectionOverviewWithSpinner from '../collection-overview/collection-overview.container';
import CollectionPageWithSpinner from '../../pages/collection/collection.container';

const ShopPage = ({ startFetch, match }) => {
  useEffect(() => {
    startFetch();
  }, [startFetch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewWithSpinner}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageWithSpinner}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startFetch: () => dispatch(startFetch())
});

export default connect(null, mapDispatchToProps)(ShopPage);
