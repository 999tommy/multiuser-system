'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.role === 'admin') {
        router.push('/admin-dashboard');
      } else if (user.role === 'editor') {
        router.push('/editor-dashboard');
      } else if (user.role === 'viewer') {
        router.push('/viewer-dashboard');
      }
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    const userCredentials = {
      admin: { username: 'admin', password: 'admin123', role: 'admin' },
      editor: { username: 'editor', password: 'editor123', role: 'editor' },
      viewer: { username: 'viewer', password: 'viewer123', role: 'viewer' },
    };


    const user = Object.values(userCredentials).find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      console.log('User stored in localStorage:', localStorage.getItem('user'));

      // Redirecting will be done based on role
      if (user.role === 'admin') {
        router.push('/admin-dashboard');
      } else if (user.role === 'editor') {
        router.push('/editor-dashboard');
      } else if (user.role === 'viewer') {
        router.push('/viewer-dashboard');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (

    <div className='mx-auto container flex-row justify-center items-center '>
      
        <h2 className='text-center py-14 text-4xl font-bold '>Login</h2>
     
      <form className=' ' onSubmit={handleLogin}>
        <div className='py-6 flex justify-center items-center'>
          <label className='text-xl px-2'>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className='text-black rounded-lg p-3'
          />
        </div>
        <div className='py-8 flex justify-center items-center'>
          <label className='text-xl px-2'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='text-black rounded-lg p-3'
          />
        </div>
        {error && <p className='text-xl text-center text-red-400 p-2'>{error}</p>}
        <div className='py-5 flex justify-center items-center'>
          <button className='text-lg bg-blue-600 p-2 font-bold rounded-lg' type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
