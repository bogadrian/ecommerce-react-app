import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectorIsFetchingTrue } from '../../redux/shop-reducer/selectors';
import { compose } from 'redux';

import WithSpinner from '../../componenets/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectorIsFetchingTrue(state)
});

const CollectionPageWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageWithSpinner;
