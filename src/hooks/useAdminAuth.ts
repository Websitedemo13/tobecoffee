import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

export const useAdminAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const resolveRole = async (s: Session | null) => {
      if (!s) {
        if (active) setIsAdmin(false);
        return;
      }
      const { data } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', s.user.id)
        .eq('role', 'admin')
        .maybeSingle();
      if (active) setIsAdmin(!!data);
    };

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      // Defer Supabase calls out of the callback to avoid deadlocks
      setTimeout(() => resolveRole(s).finally(() => active && setLoading(false)), 0);
    });

    supabase.auth.getSession().then(async ({ data }) => {
      setSession(data.session);
      await resolveRole(data.session);
      if (active) setLoading(false);
    });

    return () => {
      active = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setIsAdmin(false);
  };

  return {
    session,
    isAdmin,
    loading,
    signOut,
  };
};
