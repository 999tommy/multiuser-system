'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

const ViewerDashboard = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => { 
    if (!loading && !user) {
      console.log('No user found, redirecting to login'); 
      router.push('/login');
    }
  }, [user, loading, router]);
  

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login'); 
  };

  return (
    <div className='flex justify-center items-center'>
        <div className=''>
          <h1 className='text-3xl py-8'>Welcome to the Viewer Dashboard</h1>

          <div className="flex justify-center items-center">
          <button onClick={handleLogout} className="text-lg bg-blue-600 p-2 rounded-lg">Logout</button>
          </div>
        </div>
    </div>
  )
}

export default ViewerDashboard