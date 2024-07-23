import {
  registerUserWithEmailPassword,
  logInWithEmailAndPassword,
  signInWithGoogle,
  logOutFirebase,
} from "../../firebase/provider";
import { clearNotesLogOut } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, email, displayName, photoURL }));
  };
};

export const startLogInWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await logInWithEmailAndPassword({ email, password });

    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startLogOut = () => {
  return async (dispatch) => {
    await logOutFirebase();
    dispatch(clearNotesLogOut());
    dispatch(logout());
  };
};
