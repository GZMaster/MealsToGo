import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const loginRequest = (app, email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      setIsAuthenticated(true);
    })
    .catch((e) => {
      console.log(e);
    });
