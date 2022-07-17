import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA71rd6UgyKmldRzynNwZ1pyCfSgnY2ss0",
  authDomain: "mealstogo-c23dc.firebaseapp.com",
  projectId: "mealstogo-c23dc",
  storageBucket: "mealstogo-c23dc.appspot.com",
  messagingSenderId: "607882177935",
  appId: "1:607882177935:web:c22b9f81aeb257ebbbaffa",
};

let app;

if (!getApps.length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export const auth = getAuth(app);
