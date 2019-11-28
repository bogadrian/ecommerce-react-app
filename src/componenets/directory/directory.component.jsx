import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import selectDirectorySections from '../../redux/directory-reducer/selectors';

import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
