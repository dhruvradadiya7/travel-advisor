import {
  createContext, useContext, useEffect, useState,
} from 'react';
import './firebase';
import {
  createUserWithEmailAndPassword, onAuthStateChanged, getAuth, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail, signOut,
} from 'firebase/auth';
import { getObj } from './fetchfb';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [masters, setMasters] = useState([]);
  const auth = getAuth();

  const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const signin = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);
  const setProfile = (displayName) => updateProfile(auth.currentUser, { displayName });
  const isAdmin = currentUser?.role === 'admin';
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        const { role, blocked } = await getObj(`/users/${user.uid}`);
        user.role = role;
        user.blocked = blocked || false;
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
    return unsubcribe;
  }, []);

  // fetching all masters
  const fetchMasters = async () => {
    // Get Airport codes here.....
  };

  useEffect(() => {
    if (currentUser?.uid) {
      fetchMasters();
    }
  }, [currentUser?.uid]);

  const value = {
    currentUser,
    register,
    signin,
    setProfile,
    resetPassword,
    logout,
    masters,
    fetchMasters,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
