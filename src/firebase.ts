// Firebase initialization + Auth helpers
// Usage: import { auth, signInWithEmail, registerWithEmail, signInWithGoogle, signOutUser, onAuthStateChangedListener } from './firebase'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail,
  User,
  Auth,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZjgVGWjrdDdXuLwdd4HW11mTOEv-Ylug",
  authDomain: "edunetic.firebaseapp.com",
  projectId: "edunetic",
  storageBucket: "edunetic.firebasestorage.app",
  messagingSenderId: "581598236096",
  appId: "1:581598236096:web:6606ddcee4ba211e2d4c25",
  measurementId: "G-HLRWBJ2W24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics (optional; only works in browser environments)
let analytics: ReturnType<typeof getAnalytics> | null = null;
try {
  analytics = getAnalytics(app);
} catch (e) {
  // getAnalytics can throw in non-browser environments (SSR), so we swallow errors
  analytics = null;
}

// Auth instance
const auth: Auth = getAuth(app);

// Google provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Helper functions

/**
 * Register a user with email and password.
 * Returns the created Firebase User on success.
 */
async function registerWithEmail(email: string, password: string): Promise<User> {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

/**
 * Sign in existing user with email and password.
 * Returns the Firebase User on success.
 */
async function signInWithEmail(email: string, password: string): Promise<User> {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

/**
 * Sign in with Google popup.
 * Returns the Firebase User on success.
 */
async function signInWithGoogle(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

/**
 * Sign out the current user.
 */
async function signOutUser(): Promise<void> {
  await signOut(auth);
}

/**
 * Send a password reset email to the given address.
 */
async function sendPasswordReset(email: string): Promise<void> {
  await sendPasswordResetEmail(auth, email);
}

/**
 * Subscribe to auth state changes.
 * callback receives the current Firebase User or null.
 * Returns an unsubscribe function.
 */
function onAuthStateChangedListener(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

// Optional convenience: get current user (may be null)
function getCurrentUser(): User | null {
  return auth.currentUser;
}

export {
  app,
  analytics,
  auth,
  registerWithEmail,
  signInWithEmail,
  signInWithGoogle,
  signOutUser,
  sendPasswordReset,
  onAuthStateChangedListener,
  getCurrentUser,
};
