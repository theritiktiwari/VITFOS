import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: require("./config.json").apiKey,
  authDomain: require("./config.json").authDomain,
  databaseURL: require("./config.json").databaseURL,
  projectId: require("./config.json").projectId,
  storageBucket: require("./config.json").storageBucket,
  messagingSenderId: require("./config.json").messagingSenderId,
  appId: require("./config.json").appId,
  measurementId: require("./config.json").measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);