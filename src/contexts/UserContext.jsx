import { createContext, useState, useEffect } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const UserContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  // user data hee
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  // const [isValidRegistered, setValidRegistered] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setError("");
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const registerUser = (email, name, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .then((res) => {
        // setValidRegistered(true);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // console.log(res);
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);

        setTimeout(() => {
          setError("");
        }, 1500);
      })
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    signOut(auth);
    setUser(null);
    // setValidRegistered(false);
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, new GithubAuthProvider())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const forgotPassword = (email) => sendPasswordResetEmail(auth, email);

  const context = {
    user,
    loading,
    error,
    activeMenu,
    isClicked,
    screenSize,
    // isValidRegistered,
    setError,
    handleClick,
    setIsClicked,
    setActiveMenu,
    setScreenSize,
    registerUser,
    signInUser,
    logoutUser,
    forgotPassword,
    signInWithGoogle,
    signInWithGithub,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
