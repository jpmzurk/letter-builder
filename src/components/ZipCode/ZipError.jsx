import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ZipError(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'

  return (
    <div>
      <h2>Please enter a valid zip code!</h2>
    </div>
  );
}

export default connect(mapStoreToProps)(ZipError);