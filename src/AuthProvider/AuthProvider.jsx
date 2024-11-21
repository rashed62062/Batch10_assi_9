import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firbase_init";

export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  //  state definitions section
  const [user, setUser] = useState(null);
//  loadings section

const [loading, setLoading] = useState(true);


  //   new user registration function

  const creteUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  login user function
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  google authentication
  const signInGoogleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  //     logout user

  const singOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   update profile  name and photo url

  const update = (name, photoURL) => {
    return updateProfile(auth.currentUser, {

      displayName: name,
      photoURL: photoURL,
    });
  };

  //  Forget password
  const forgotPassword = () => {
    return sendPasswordResetEmail (auth, email);
  };





  //    observer  Functions

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("c", currentUser);
      setUser(currentUser);
      setLoading(false); // Data is now loaded
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const name = "auth";

  //  create a new AuthProvider google authentication
  const AuthInfo = {
    name,
    user,
    creteUser,
   
    signInUser,
    singOutUser,
    signInGoogleUser,
    update,
    loading, // for loading state
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children} {/* pass children to the provider */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
