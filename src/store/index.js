import { createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseConfig, rrfConfig } from '../config';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

// Initialize firebase
firebase.initializeApp(firebaseConfig);
// Initialize other services on firebase instance
firebase.firestore();

// Add redux devtools in compose if any
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = composeEnhancer(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance
  reduxFirestore(firebase)
)(createStore);

// Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(rootReducer(history), initialState);

export default store;
