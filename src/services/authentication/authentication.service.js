import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      setIsAuthenticated(true);
    })
    .catch((e) => {
      console.log(e);
    });
