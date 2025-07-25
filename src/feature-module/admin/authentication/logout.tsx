import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear local/session storage or Supabase session, etc.
    localStorage.removeItem('logged_user');
    // sessionStorage.removeItem('logged_user'); // if using sessionStorage instead

    // Redirect to signin
    navigate('/signin');
  }, [navigate]);

  return null; // Or a spinner/loading indicator
};

export default Logout;
