"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { User as SupabaseUser } from "@supabase/supabase-js";

interface User {
  id: string;
  email: string;
  name: string;
  type: "client" | "artist" | "admin";
  plan?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, type: "client" | "artist") => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Credenciais fixas para demonstração (fallback)
const DEMO_CREDENTIALS = {
  admin: {
    email: "admin@tattoosync.com",
    password: "admin123",
    name: "Admin TattooSync",
    type: "admin" as const,
  },
  artist: {
    email: "artist@tattoosync.com",
    password: "artist123",
    name: "Tatuador Demo",
    type: "artist" as const,
    plan: "PRO",
  },
  client: {
    email: "client@tattoosync.com",
    password: "client123",
    name: "Cliente Demo",
    type: "client" as const,
    plan: "PREMIUM",
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Verificar sessão ao carregar
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const userData = await getUserProfile(session.user);
          setUser(userData);
        }
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();

    // Listener para mudanças de auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          const userData = await getUserProfile(session.user);
          setUser(userData);
        } else {
          setUser(null);
        }
        setIsLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const getUserProfile = async (supabaseUser: SupabaseUser): Promise<User> => {
    // Primeiro, tentar buscar perfil do banco
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', supabaseUser.id)
      .single();

    if (profile) {
      return {
        id: profile.id,
        email: profile.email,
        name: profile.name || supabaseUser.user_metadata?.name || supabaseUser.email || '',
        type: profile.type || 'client',
        plan: profile.plan,
      };
    }

    // Se não existir perfil, criar um básico
    const userType = determineUserType(supabaseUser.email || '');
    const userData: User = {
      id: supabaseUser.id,
      email: supabaseUser.email || '',
      name: supabaseUser.user_metadata?.name || supabaseUser.email?.split('@')[0] || '',
      type: userType,
      plan: 'FREE',
    };

    // Criar perfil no banco
    await supabase.from('profiles').insert({
      id: userData.id,
      email: userData.email,
      name: userData.name,
      type: userData.type,
      plan: userData.plan,
    });

    return userData;
  };

  const determineUserType = (email: string): "client" | "artist" | "admin" => {
    if (email === DEMO_CREDENTIALS.admin.email) return 'admin';
    if (email === DEMO_CREDENTIALS.artist.email) return 'artist';
    return 'client';
  };

  const login = async (email: string, password: string) => {
    try {
      // Verificar se são credenciais demo
      if (
        (email === DEMO_CREDENTIALS.admin.email && password === DEMO_CREDENTIALS.admin.password) ||
        (email === DEMO_CREDENTIALS.artist.email && password === DEMO_CREDENTIALS.artist.password) ||
        (email === DEMO_CREDENTIALS.client.email && password === DEMO_CREDENTIALS.client.password)
      ) {
        // Usar Supabase Auth para demo (se quiser, mas por enquanto manter simulado)
        const userType = determineUserType(email);
        const demoUser = DEMO_CREDENTIALS[userType as keyof typeof DEMO_CREDENTIALS];

        const userData: User = {
          id: `${userType}-001`,
          email: demoUser.email,
          name: demoUser.name,
          type: demoUser.type,
          plan: demoUser.plan,
        };

        setUser(userData);
        localStorage.setItem("tattoosync_user", JSON.stringify(userData));

        // Redirecionar baseado no tipo
        if (userData.type === "admin") {
          router.push("/admin");
        } else if (userData.type === "artist") {
          router.push("/artist");
        } else {
          router.push("/client");
        }
        return;
      }

      // Login normal com Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // O listener onAuthStateChange cuidará de setar o user
    } catch (error) {
      console.error("Erro no login:", error);
      throw new Error("Email ou senha incorretos. Tente novamente.");
    }
  };

  const signup = async (email: string, password: string, name: string, type: "client" | "artist") => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            type,
          },
        },
      });

      if (error) throw error;

      if (data.user) {
        // Criar perfil
        await supabase.from('profiles').insert({
          id: data.user.id,
          email,
          name,
          type,
          plan: 'FREE',
        });

        // Redirecionar para login ou dashboard
        router.push('/login?message=Verifique seu email para confirmar a conta');
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      throw new Error("Erro ao criar conta. Tente novamente.");
    }
  };

  const loginWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
    } catch (error) {
      console.error("Erro no login com Google:", error);
      throw new Error("Falha no login com Google.");
    }
  };

  const loginWithFacebook = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
    } catch (error) {
      console.error("Erro no login com Facebook:", error);
      throw new Error("Falha no login com Facebook.");
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      localStorage.removeItem("tattoosync_user");
      router.push("/login");
    } catch (error) {
      console.error("Erro no logout:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        loginWithGoogle,
        loginWithFacebook,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
}