// src/feature-module/admin/SessionContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import supabase from '../../supabaseClient'; // adjust path if needed

interface SessionContextType {
  session: any;
  profile: any;
  loading: boolean;
  setProfile: (profile: any) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const getSessionAndProfile = async () => {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();

      if (!mounted) return;
      setSession(session);

      if (session?.user?.phone) {
        const dbMobile = session.user.phone.replace(/^\+?91/, '');
        const { data: profileData, error } = await supabase
          .from('rd_users')
          .select('*')
          .eq('mobile', dbMobile)
          .single();

        if (!error) {
          setProfile(profileData);
        }
      }

      setLoading(false);
    };

    getSessionAndProfile();

    // Supabase auth state change listener
    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      if (newSession?.user?.phone) {
        const dbMobile = newSession.user.phone.replace(/^\+?91/, '');
        supabase
          .from('rd_users')
          .select('*')
          .eq('mobile', dbMobile)
          .single()
          .then(({ data, error }) => {
            if (!error) setProfile(data);
          });
      } else {
        setProfile(null);
      }
    });

    return () => {
      mounted = false;
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <SessionContext.Provider value={{ session, profile, loading, setProfile }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) throw new Error('useSession must be used within a SessionProvider');
  return context;
};
