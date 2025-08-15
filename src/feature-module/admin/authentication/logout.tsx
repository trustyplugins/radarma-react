import { useEffect } from 'react';
import supabase from '../../../supabaseClient';

const Logout = () => {
  useEffect(() => {
    const doLogout = async () => {
      try {
        // End Supabase session
        await supabase.auth.signOut();

        // Optional: log for debugging
        console.log('User logged out, redirecting...');

        // Delay redirect by 1 second
        setTimeout(() => {
          window.location.href = '/signin';
        }, 1500);

      } catch (err) {
        console.error('Logout error:', err);
      }
    };

    doLogout();
  }, []);

  return null; // Replace with a spinner if you want
};

export default Logout;
