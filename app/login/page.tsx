'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerWithEmail, signInWithEmail, signInWithGoogle } from '@/src/firebase'; // adjust path if needed

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      console.log('UI: calling registerWithEmail', email);
      const user = await registerWithEmail(email, password);
      console.log('UI: signup success', user?.uid);
      router.push('/');
    } catch (err) {
      console.error('UI: signup failed', err);
      alert((err as Error).message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      console.log('UI: calling signInWithEmail', email);
      const user = await signInWithEmail(email, password);
      console.log('UI: login success', user?.uid);
      router.push('/');
    } catch (err) {
      console.error('UI: login failed', err);
      alert((err as Error).message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setLoading(true);
    try {
      console.log('UI: calling signInWithGoogle');
      const user = await signInWithGoogle();
      console.log('UI: google success', user?.uid);
      router.push('/');
    } catch (err) {
      console.error('UI: google sign-in failed', err);
      alert((err as Error).message || 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>Login / Signup</h1>

      <form onSubmit={handleLogin}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
        <button type="submit" disabled={loading}>Sign in</button>
      </form>

      <form onSubmit={handleSignup}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
        <button type="submit" disabled={loading}>Sign up</button>
      </form>

      <button onClick={handleGoogleSignIn} disabled={loading}>Sign in with Google</button>
    </main>
  );
}
