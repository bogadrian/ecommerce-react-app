import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectorIsFetching } from '../../redux/shop-reducer/selectors';
import { compose } from 'redux';

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectorIsFetching
});

const CollectionOverviewWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewWithSpinner;
