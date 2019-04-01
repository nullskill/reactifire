import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

// custom reducers...
// import authReducer, { moduleName as authModule } from '../ducks/auth';

export default history =>
  combineReducers({
    router: connectRouter(history),
    firebase: firebaseReducer,
    firestore: firestoreReducer
    // custom reducers...
    //, [authModule]: authReducer
  });
