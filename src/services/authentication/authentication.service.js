import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config";

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      setIsAuthenticated(true);
    })
    .catch((e) => {
      console.log(e);
    });
};
