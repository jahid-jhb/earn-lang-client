import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase.config';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {

    const [location, setLocation] = useState('');

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email and password
    const register = async (name, email, photoURL, password) => {
        setLoading(true);

        const result = await createUserWithEmailAndPassword(auth, email, password);
        return await updateProfile(result.user, {
            displayName: name,
            photoURL: photoURL
        });
    };

    // login with email and password
    const login = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);
    };


    // google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // logout
    const logout = () => {
        signOut(auth);
    };


    // observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);


    const authInfo = {
        user,
        loading,
        register,
        login,
        googleSignIn,
        logout,
        location,
        setLocation
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
