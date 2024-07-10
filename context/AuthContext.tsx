import React, { createContext, useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { addAuthCookie, removeAuthCookie } from '@/lib/auth-cookie';

export interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const token = await user.getIdToken();
        addAuthCookie(token);
      } else {
        setUser(null);
        removeAuthCookie();
      }
    });
  
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};