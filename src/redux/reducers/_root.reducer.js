import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

import zip from './zip.reducer';
import address from './address.reducer';
import states from './states.reducer';
import policies from './policy.reducer';
import reps from './reps.reducer'
import letter from './letter.reducer';


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  zip,
  address,
  states,
  policies,
  reps, // has representatives
  letter,
});

export default rootReducer;
