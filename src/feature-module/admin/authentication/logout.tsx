import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../../supabaseClient';
import { useUser } from '../../../context/UserContext';

const Logout = () => {
  const navigate = useNavigate();
  const { setProfile } = useUser(); // clear profile in context

  useEffect(() => {
    const doLogout = async () => {
      try {
        // End Supabase session
        await supabase.auth.signOut();

        // Clear in-memory profile
        setProfile(null);

        // Redirect to signin
        navigate('/signin', { replace: true });
      } catch (err) {
        console.error('Logout error:', err);
      }
    };

    doLogout();
  }, [navigate, setProfile]);

  return null; // Or a spinner/loading indicator
};

export default Logout;
