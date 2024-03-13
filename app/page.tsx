"use client";

import { useState, useEffect } from "react";
import { useSession, SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const { data: session, status: sessionStatus } = useSession();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/contacts');
    }
  }, [session, router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === 'admin' && password === 'adminhmeiseventeam') {
      router.push('/contacts');
    } else {
      setError('Username or password is incorrect');
    }
  };

  if (sessionStatus === 'loading') return <div>Loading...</div>;

  return (
    <main className="bg-pageBg bg-cover bg-center bg-no-repeat">
      <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">
        <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
          <h1 className="text-center text-black font-light text-4xl bg-yellow rounded-t-xl m-0 py-4">
            LOGIN
          </h1>
          <form className="p-6" onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="py-2 px-3 w-full text-black text-lg font-light outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex mt-5 justify-between items-center">
              <button
                type="submit"
                className="bg-black text-yellow font-medium py-2 px-8 transition hover:text-white"
              >
                Sign In
              </button>
            </div>
          </form>
        </aside>
      </div>
    </main>
  );
};

const LoginPage = () => (
  <SessionProvider>
    <LoginForm />
  </SessionProvider>
);

export default LoginPage;