"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  onAuthStateChanged, 
  User,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

interface UserProfile {
  name: string;
  phone: string;
  age: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signUpWithEmail: (data: UserProfile & { password: string }) => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signInWithGoogle: async () => {},
  signInWithApple: async () => {},
  signUpWithEmail: async () => {},
  loginWithEmail: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        try {
          const docRef = doc(db, "users", firebaseUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProfile(docSnap.data() as UserProfile);
          } else {
            // Create a default profile if it doesn't exist (e.g., for social login)
            const defaultProfile = {
              name: firebaseUser.displayName || "",
              email: firebaseUser.email || "",
              phone: "",
              age: ""
            };
            setProfile(defaultProfile);
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;
      
      const docRef = doc(db, "users", firebaseUser.uid);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        const userProfile = {
          name: firebaseUser.displayName || "",
          email: firebaseUser.email || "",
          phone: "",
          age: ""
        };
        await setDoc(docRef, userProfile);
        setProfile(userProfile);
      }
    } catch (error) {
      console.error("Google sign in error:", error);
      throw error;
    }
  };

  const signInWithApple = async () => {
    try {
      const provider = new OAuthProvider('apple.com');
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;
      
      const docRef = doc(db, "users", firebaseUser.uid);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        const userProfile = {
          name: firebaseUser.displayName || "",
          email: firebaseUser.email || "",
          phone: "",
          age: ""
        };
        await setDoc(docRef, userProfile);
        setProfile(userProfile);
      }
    } catch (error) {
      console.error("Apple sign in error:", error);
      throw error;
    }
  };

  const signUpWithEmail = async (data: UserProfile & { password: string }) => {
    const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, data.email, data.password);
    await updateProfile(firebaseUser, { displayName: data.name });
    
    const userProfile = {
      name: data.name,
      phone: data.phone,
      age: data.age,
      email: data.email
    };
    
    await setDoc(doc(db, "users", firebaseUser.uid), userProfile);
    setProfile(userProfile);
  };

  const loginWithEmail = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signInWithGoogle, signInWithApple, signUpWithEmail, loginWithEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);