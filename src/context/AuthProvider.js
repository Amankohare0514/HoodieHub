"use client";

import React, { createContext, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Monitor authentication state
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const register = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handlePasswordReset = async (email) => {
    if (!email) {
      throw new Error("Please provide an email address.");
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent. Check your inbox!");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
      throw new Error("Unable to send password reset email. Please try again.");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, handlePasswordReset }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
