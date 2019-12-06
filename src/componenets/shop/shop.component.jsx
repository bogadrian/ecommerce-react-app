import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { startFetch } from '../../redux/shop-reducer/shop-actions';

import CollectionOverviewWithSpinner from '../collection-overview/collection-overview.container';
import CollectionPageWithSpinner from '../../pages/collection/collection.container';

class ShopPage extends React.Component {
  unsubscribeFromSnapShotData = null;

  componentDidMount() {
    const { startFetch } = this.props;
    startFetch();
  }

  render() {
    const { match } = this.props;

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
  }
}

const mapDispatchToProps = dispatch => ({
  startFetch: () => dispatch(startFetch())
});

export default connect(null, mapDispatchToProps)(ShopPage);
