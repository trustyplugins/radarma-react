import React, { createContext, useContext, useEffect, useState } from 'react';
import supabase from '../supabaseClient';

type UserProfile = {
  id: number;
  name: string;
  email: string;
  mobile: string;
  role: string;
  status: number;
  created_at: string;
  updated_at: string;
} | null;

interface UserCtx {
  profile: UserProfile;
  setProfile: (p: UserProfile) => void;
  loading: boolean;
}

const Ctx = createContext<UserCtx>({ profile: null, setProfile: () => {
    //
}, loading: true });

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(null);
  const [loading, setLoading] = useState(true);

  // Load session + profile once on mount
  useEffect(() => {
    let isMounted = true;
  
    const load = async () => {
      const { data: { session} } = await supabase.auth.getSession();
  
      if (!isMounted) return;
  
      if (session?.user?.phone) {
        const dbMobile = session.user.phone.replace(/^\+?91/, '');
  
        const { data, error } = await supabase
          .from('rd_users')
          .select('*')
          .eq('mobile', dbMobile)
          .single();
  
        if (!isMounted) return;
  
        setProfile(error ? null : data || null);
      } else {
        setProfile(null);
      }
      setLoading(false);
    };
  
    load();
  
    const { data: sub } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!isMounted) return;
  
      if (session?.user?.phone) {
        const dbMobile = session.user.phone.replace(/^\+?91/, '');
        const { data, error } = await supabase
          .from('rd_users')
          .select('*')
          .eq('mobile', dbMobile)
          .single();
        setProfile(error ? null : data || null);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
  
    return () => {
      isMounted = false;
      sub?.subscription?.unsubscribe();
    };
  }, []);
  
  return (
    <Ctx.Provider value={{ profile, setProfile, loading }}>
      {children}
    </Ctx.Provider>
  );
};

export const useUser = () => useContext(Ctx);
