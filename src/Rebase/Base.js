import Rebase from "re-base";
import firebase from "firebase";

const devConfig = {
  apiKey: "AIzaSyDhTzObNmxGvBFBi2xIhGXx_c-17rhKWO8",
  authDomain: "testquery-development.firebaseapp.com",
  databaseURL: "https://testquery-development.firebaseio.com",
  projectId: "testquery-development",
  storageBucket: "testquery-development.appspot.com",
  messagingSenderId: "85029183393"
};

const prodConfig = {
  apiKey: "AIzaSyCQ6swsqzDOL0j4TUp9NlIzFq55i1hlfyQ",
  authDomain: "testquery-production.firebaseapp.com",
  databaseURL: "https://testquery-production.firebaseio.com",
  projectId: "testquery-production",
  storageBucket: "testquery-production.appspot.com",
  messagingSenderId: "762603203870"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export {base};
