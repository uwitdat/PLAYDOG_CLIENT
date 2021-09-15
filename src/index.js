import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "components/ErrorBoundary";
import { HashRouter } from "react-router-dom";
// import unregister from "./registerServiceWorker";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

import { Provider } from "react-redux";
import store from "./redux-store/store";

import "./config/firebase";
import firebase from "firebase/app";

import "assets/stylesheets/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <HashRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </HashRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

/**
 * Be aware that the website will only update to the latest version on the 2nd page visit if it as already cached
 * Learn more about service workers in React: https://create-react-app.dev/docs/making-a-progressive-web-app
 */
// unregister();
