"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("Erro no callback de auth:", error);
          router.push("/login?error=auth_callback_error");
          return;
        }

        if (data.session) {
          // Verificar se perfil existe, se não, criar
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.session.user.id)
            .single();

          if (!profile) {
            // Criar perfil básico
            const userType = data.session.user.email?.includes('demo') ? 'client' : 'client'; // Lógica simples
            await supabase.from('profiles').insert({
              id: data.session.user.id,
              email: data.session.user.email,
              name: data.session.user.user_metadata?.name || data.session.user.email?.split('@')[0],
              type: userType,
              plan: 'FREE',
            });
          }

          // Redirecionar baseado no tipo de usuário
          const profileData = profile || { type: 'client' };
          if (profileData.type === 'admin') {
            router.push('/admin');
          } else if (profileData.type === 'artist') {
            router.push('/artist');
          } else {
            router.push('/client');
          }
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error("Erro no callback:", error);
        router.push("/login?error=auth_callback_error");
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#0EA5E9] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-white mb-2">Autenticando...</h2>
        <p className="text-[#8C8C8C]">Aguarde enquanto processamos seu login.</p>
      </div>
    </div>
  );
}