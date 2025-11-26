"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedTypes?: ("client" | "artist" | "admin")[];
}

export default function ProtectedRoute({ children, allowedTypes }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading) {
      // Se não está autenticado, redireciona para login
      if (!user) {
        router.push(`/login?redirect=${pathname}`);
        return;
      }

      // Se está autenticado mas não tem permissão para esta rota
      if (allowedTypes && !allowedTypes.includes(user.type)) {
        // Redireciona para a página apropriada do usuário
        if (user.type === "admin") {
          router.push("/admin");
        } else if (user.type === "artist") {
          router.push("/artist");
        } else {
          router.push("/client");
        }
      }
    }
  }, [user, isLoading, router, pathname, allowedTypes]);

  // Mostrar loading enquanto verifica autenticação
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0EA5E9] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#8C8C8C]">Verificando autenticação...</p>
        </div>
      </div>
    );
  }

  // Se não está autenticado, não renderiza nada (vai redirecionar)
  if (!user) {
    return null;
  }

  // Se está autenticado mas não tem permissão, não renderiza
  if (allowedTypes && !allowedTypes.includes(user.type)) {
    return null;
  }

  // Renderiza o conteúdo protegido
  return <>{children}</>;
}
