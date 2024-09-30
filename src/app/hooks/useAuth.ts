'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const [user, setUser] = useState(null); // null as initial value means no user is logged in
  const [loading, setLoading] = useState(true); // Loading state until the check is done
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    // Add a console log to check if localStorage has any user data
    console.log("Stored User:", storedUser);

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser); // Set user if found
    } else {
      router.push('/login'); // Redirect if no user found
    }

    setLoading(false); // End the loading state after check
  }, [router]);

  return { user, loading };
};

export default useAuth;