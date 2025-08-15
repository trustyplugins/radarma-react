import { useEffect } from 'react';
import supabase from '../../../supabaseClient';

const Logout = () => {
  useEffect(() => {
    const doLogout = async () => {
      try {
        // End Supabase session
        await supabase.auth.signOut();
        // Force full reload to signin
        window.location.href = '/signin';
      } catch (err) {
        console.error('Logout error:', err);
      }
    };

    doLogout();
  }, []);

  return null; // Optional: spinner/loading indicator
};

export default Logout;
