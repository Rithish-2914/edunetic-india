// Firebase initialization + Auth helpers (browser-safe)
// Usage: import { registerWithEmail, signInWithEmail, signInWithGoogle, signOutUser, sendPasswordReset, onAuthStateChangedListener, getCurrentUser } from './firebase'

import { initializeApp } from "firebase/app";
// getAnalytics will only be used in browser; wrap in try/catch
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as firebaseOnAuthStateChanged,
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

// Initialize Firebase app (safe to run on server)
const app = initializeApp(firebaseConfig);

// Analytics (optional; only initialize in browser)
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    // analytics may fail in some environments; do not crash the app
    // eslint-disable-next-line no-console
    console.warn("Firebase analytics not available:", e);
    analytics = null;
  }
}

// Lazy auth instance; don't call getAuth on import to avoid running on server
let authInstance: Auth | null = null;
let googleProviderInstance: GoogleAuthProvider | null = null;

function ensureAuth(): Auth {
  if (authInstance) return authInstance;
  if (typeof window === "undefined") {
    throw new Error("Firebase Auth can only be used in the browser. Ensure you call auth functions from client components or inside useEffect.");
  }
  authInstance = getAuth(app);
  return authInstance;
}

function ensureGoogleProvider(): GoogleAuthProvider {
  if (googleProviderInstance) return googleProviderInstance;
  if (typeof window === "undefined") {
    throw new Error("GoogleAuthProvider can only be used in the browser.");
  }
  googleProviderInstance = new GoogleAuthProvider();
  googleProviderInstance.setCustomParameters({ prompt: "select_account" });
  return googleProviderInstance;
}

// Helper functions with logging and browser-safety
async function registerWithEmail(email: string, password: string): Promise<User> {
  if (typeof window === "undefined") throw new Error("registerWithEmail must be called in the browser");
  try {
    // eslint-disable-next-line no-console
    console.log("Firebase: registerWithEmail", email);
    const userCredential = await createUserWithEmailAndPassword(ensureAuth(), email, password);
    // eslint-disable-next-line no-console
    console.log("Firebase: registerWithEmail success", userCredential.user?.uid);
    return userCredential.user;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Firebase: registerWithEmail error", err);
    throw err;
  }
}

async function signInWithEmail(email: string, password: string): Promise<User> {
  if (typeof window === "undefined") throw new Error("signInWithEmail must be called in the browser");
  try {
    // eslint-disable-next-line no-console
    console.log("Firebase: signInWithEmail", email);
    const userCredential = await signInWithEmailAndPassword(ensureAuth(), email, password);
    // eslint-disable-next-line no-console
    console.log("Firebase: signInWithEmail success", userCredential.user?.uid);
    return userCredential.user;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Firebase: signInWithEmail error", err);
    throw err;
  }
}

async function signInWithGoogle(): Promise<User> {
  if (typeof window === "undefined") throw new Error("signInWithGoogle must be called in the browser");
  try {
    // eslint-disable-next-line no-console
    console.log("Firebase: signInWithGoogle popup starting");
    const result = await signInWithPopup(ensureAuth(), ensureGoogleProvider());
    // eslint-disable-next-line no-console
    console.log("Firebase: signInWithGoogle success", result.user?.uid);
    return result.user;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Firebase: signInWithGoogle error", err);
    throw err;
  }
}

async function signOutUser(): Promise<void> {
  if (typeof window === "undefined") throw new Error("signOutUser must be called in the browser");
  try {
    // eslint-disable-next-line no-console
    console.log("Firebase: signing out");
    await firebaseSignOut(ensureAuth());
    // eslint-disable-next-line no-console
    console.log("Firebase: sign out success");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Firebase: signOut error", err);
    throw err;
  }
}

async function sendPasswordReset(email: string): Promise<void> {
  if (typeof window === "undefined") throw new Error("sendPasswordReset must be called in the browser");
  try {
    // eslint-disable-next-line no-console
    console.log("Firebase: sendPasswordReset", email);
    await sendPasswordResetEmail(ensureAuth(), email);
    // eslint-disable-next-line no-console
    console.log("Firebase: sendPasswordReset email sent");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Firebase: sendPasswordReset error", err);
    throw err;
  }
}

function onAuthStateChangedListener(callback: (user: User | null) => void) {
  if (typeof window === "undefined") throw new Error("onAuthStateChangedListener must be called in the browser");
  // returns unsubscribe function
  return firebaseOnAuthStateChanged(ensureAuth(), callback);
}

function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    return ensureAuth().currentUser;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn("Firebase: getCurrentUser failed", e);
    return null;
  }
}

export {
  app,
  analytics,
  // Note: export functions; avoid exporting an auth instance directly to prevent accidental server usage
  registerWithEmail,
  signInWithEmail,
  signInWithGoogle,
  signOutUser,
  sendPasswordReset,
  onAuthStateChangedListener,
  getCurrentUser,
};
