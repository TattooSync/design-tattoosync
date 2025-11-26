"use client";

import { useState, useEffect } from "react";
import { Sparkles, Globe, Mail, Lock, ChevronRight, Eye, EyeOff, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function Login() {
  const [language, setLanguage] = useState("PT");
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, loginWithGoogle, loginWithFacebook, isAuthenticated } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Redirecionar se já está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      const redirect = searchParams.get("redirect") || "/client";
      router.push(redirect);
    }
  }, [isAuthenticated, router, searchParams]);

  const translations = {
    PT: {
      title: "Bem-vindo de Volta",
      subtitle: "Entre na sua conta TATTOOSYNC",
      email: "Email",
      password: "Senha",
      remember: "Lembrar-me",
      login: "Entrar",
      noAccount: "Não tem conta?",
      register: "Criar Conta",
      or: "ou",
      google: "Continuar com Google",
      facebook: "Continuar com Facebook",
      error: "Erro ao fazer login. Verifique suas credenciais.",
      demoTitle: "🔐 Credenciais de Demonstração",
      adminCreds: "Admin: admin@tattoosync.com / admin123",
      artistCreds: "Tatuador: artist@tattoosync.com / artist123",
      clientCreds: "Cliente: client@tattoosync.com / client123",
    },
    EN: {
      title: "Welcome Back",
      subtitle: "Sign in to your TATTOOSYNC account",
      email: "Email",
      password: "Password",
      remember: "Remember me",
      login: "Sign In",
      noAccount: "Don't have an account?",
      register: "Create Account",
      or: "or",
      google: "Continue with Google",
      facebook: "Continue with Facebook",
      error: "Login error. Check your credentials.",
      demoTitle: "🔐 Demo Credentials",
      adminCreds: "Admin: admin@tattoosync.com / admin123",
      artistCreds: "Artist: artist@tattoosync.com / artist123",
      clientCreds: "Client: client@tattoosync.com / client123",
    },
    DE: {
      title: "Willkommen Zurück",
      subtitle: "Melden Sie sich bei Ihrem TATTOOSYNC-Konto an",
      email: "E-Mail",
      password: "Passwort",
      remember: "Angemeldet bleiben",
      login: "Anmelden",
      noAccount: "Haben Sie kein Konto?",
      register: "Konto Erstellen",
      or: "oder",
      google: "Mit Google Fortfahren",
      facebook: "Mit Facebook Fortfahren",
      error: "Anmeldefehler. Überprüfen Sie Ihre Anmeldedaten.",
      demoTitle: "🔐 Demo-Anmeldedaten",
      adminCreds: "Admin: admin@tattoosync.com / admin123",
      artistCreds: "Künstler: artist@tattoosync.com / artist123",
      clientCreds: "Kunde: client@tattoosync.com / client123",
    },
    FR: {
      title: "Bon Retour",
      subtitle: "Connectez-vous à votre compte TATTOOSYNC",
      email: "Email",
      password: "Mot de Passe",
      remember: "Se souvenir de moi",
      login: "Se Connecter",
      noAccount: "Vous n'avez pas de compte?",
      register: "Créer un Compte",
      or: "ou",
      google: "Continuer avec Google",
      facebook: "Continuer avec Facebook",
      error: "Erreur de connexion. Vérifiez vos identifiants.",
      demoTitle: "🔐 Identifiants de Démonstration",
      adminCreds: "Admin: admin@tattoosync.com / admin123",
      artistCreds: "Artiste: artist@tattoosync.com / artist123",
      clientCreds: "Client: client@tattoosync.com / client123",
    },
  };

  const t = translations[language as keyof typeof translations];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
    } catch (err) {
      setError(t.error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setIsLoading(true);
    try {
      await loginWithGoogle();
    } catch (err) {
      setError(t.error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    setError("");
    setIsLoading(true);
    try {
      await loginWithFacebook();
    } catch (err) {
      setError(t.error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#0EA5E9] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0EA5E9] rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>
      </div>

      {/* Language Selector */}
      <div className="absolute top-8 right-8 z-50">
        <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2C2C2C] rounded-full px-4 py-2 backdrop-blur-xl">
          <Globe className="w-4 h-4 text-[#8C8C8C]" />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent text-white text-sm font-medium outline-none cursor-pointer"
          >
            <option value="PT">🇵🇹 PT</option>
            <option value="EN">🇬🇧 EN</option>
            <option value="DE">🇩🇪 DE</option>
            <option value="FR">🇫🇷 FR</option>
          </select>
        </div>
      </div>

      {/* Back to Home */}
      <Link href="/">
        <div className="absolute top-8 left-8 z-50 flex items-center gap-2 text-[#8C8C8C] hover:text-white transition-colors cursor-pointer">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span className="text-sm font-medium">Home</span>
        </div>
      </Link>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-xl flex items-center justify-center shadow-2xl shadow-[#0EA5E9]/50">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              TATTOO<span className="text-[#0EA5E9]">SYNC</span>
            </h1>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8 animate-fade-in delay-200">
          <h2 className="text-3xl font-bold mb-2">{t.title}</h2>
          <p className="text-[#8C8C8C]">{t.subtitle}</p>
        </div>

        {/* Demo Credentials */}
        <div className="w-full max-w-md mb-4 animate-fade-in delay-300">
          <div className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#0284C7]/10 border border-[#0EA5E9]/30 rounded-xl p-4">
            <h3 className="text-sm font-bold text-[#0EA5E9] mb-3">{t.demoTitle}</h3>
            <div className="space-y-2 text-xs">
              <div className="bg-black/30 rounded-lg p-2 font-mono">
                <p className="text-[#D4AF37] font-semibold mb-1">👑 {t.adminCreds.split(':')[0]}:</p>
                <p className="text-white">{t.adminCreds.split(':')[1]}</p>
              </div>
              <div className="bg-black/30 rounded-lg p-2 font-mono">
                <p className="text-[#0EA5E9] font-semibold mb-1">🎨 {t.artistCreds.split(':')[0]}:</p>
                <p className="text-white">{t.artistCreds.split(':')[1]}</p>
              </div>
              <div className="bg-black/30 rounded-lg p-2 font-mono">
                <p className="text-[#10B981] font-semibold mb-1">👤 {t.clientCreds.split(':')[0]}:</p>
                <p className="text-white">{t.clientCreds.split(':')[1]}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="w-full max-w-md mb-4 animate-fade-in">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 flex items-center gap-2 text-red-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="w-full max-w-md animate-fade-in delay-400">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type="email"
                  placeholder={t.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#0EA5E9] focus:outline-none transition-colors"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={t.password}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#0EA5E9] focus:outline-none transition-colors"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C8C8C] hover:text-white transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.remember}
                  onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                  className="w-4 h-4 rounded border-[#2C2C2C] bg-[#1A1A1A] text-[#0EA5E9] focus:ring-[#0EA5E9] focus:ring-offset-0"
                  disabled={isLoading}
                />
                <span className="text-sm text-[#8C8C8C]">{t.remember}</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-xl py-4 font-semibold text-lg shadow-2xl shadow-[#0EA5E9]/50 hover:shadow-[#0EA5E9]/70 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Entrando...</span>
                </div>
              ) : (
                t.login
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-[#2C2C2C]" />
              <span className="text-[#8C8C8C] text-sm">{t.or}</span>
              <div className="flex-1 h-px bg-[#2C2C2C]" />
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl py-4 font-semibold hover:border-[#0EA5E9] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-xl">🔍</span>
                {t.google}
              </button>
              <button
                type="button"
                onClick={handleFacebookLogin}
                disabled={isLoading}
                className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl py-4 font-semibold hover:border-[#0EA5E9] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-xl">📘</span>
                {t.facebook}
              </button>
            </div>
          </form>

          {/* Register Link */}
          <div className="text-center mt-6">
            <p className="text-[#8C8C8C]">
              {t.noAccount}{" "}
              <Link href="/register" className="text-[#0EA5E9] hover:underline font-semibold">
                {t.register}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
