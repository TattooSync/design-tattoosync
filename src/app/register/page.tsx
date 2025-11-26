"use client";

import { useState, useEffect } from "react";
import { Sparkles, Globe, Mail, Lock, User, ChevronRight, Eye, EyeOff, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function Register() {
  const [language, setLanguage] = useState("PT");
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    type: "client" as "client" | "artist",
  });

  const router = useRouter();
  const { signup, loginWithGoogle, loginWithFacebook, isAuthenticated } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Redirecionar se já está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/client");
    }
  }, [isAuthenticated, router]);

  const translations = {
    PT: {
      title: "Criar Conta",
      subtitle: "Junte-se à comunidade TATTOOSYNC",
      name: "Nome Completo",
      email: "Email",
      password: "Senha",
      confirmPassword: "Confirmar Senha",
      type: "Tipo de Conta",
      client: "Cliente",
      artist: "Tatuador",
      register: "Criar Conta",
      haveAccount: "Já tem conta?",
      login: "Entrar",
      or: "ou",
      google: "Continuar com Google",
      facebook: "Continuar com Facebook",
      error: "Erro ao criar conta. Verifique os dados.",
      passwordMismatch: "As senhas não coincidem.",
      success: "Conta criada com sucesso! Verifique seu email.",
    },
    EN: {
      title: "Create Account",
      subtitle: "Join the TATTOOSYNC community",
      name: "Full Name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      type: "Account Type",
      client: "Client",
      artist: "Artist",
      register: "Create Account",
      haveAccount: "Already have an account?",
      login: "Sign In",
      or: "or",
      google: "Continue with Google",
      facebook: "Continue with Facebook",
      error: "Error creating account. Check your data.",
      passwordMismatch: "Passwords do not match.",
      success: "Account created successfully! Check your email.",
    },
    DE: {
      title: "Konto Erstellen",
      subtitle: "Treten Sie der TATTOOSYNC-Community bei",
      name: "Vollständiger Name",
      email: "E-Mail",
      password: "Passwort",
      confirmPassword: "Passwort Bestätigen",
      type: "Kontotyp",
      client: "Kunde",
      artist: "Künstler",
      register: "Konto Erstellen",
      haveAccount: "Haben Sie bereits ein Konto?",
      login: "Anmelden",
      or: "oder",
      google: "Mit Google Fortfahren",
      facebook: "Mit Facebook Fortfahren",
      error: "Fehler beim Erstellen des Kontos. Überprüfen Sie Ihre Daten.",
      passwordMismatch: "Passwörter stimmen nicht überein.",
      success: "Konto erfolgreich erstellt! Überprüfen Sie Ihre E-Mail.",
    },
    FR: {
      title: "Créer un Compte",
      subtitle: "Rejoignez la communauté TATTOOSYNC",
      name: "Nom Complet",
      email: "Email",
      password: "Mot de Passe",
      confirmPassword: "Confirmer le Mot de Passe",
      type: "Type de Compte",
      client: "Client",
      artist: "Artiste",
      register: "Créer un Compte",
      haveAccount: "Vous avez déjà un compte?",
      login: "Se Connecter",
      or: "ou",
      google: "Continuer avec Google",
      facebook: "Continuer avec Facebook",
      error: "Erreur lors de la création du compte. Vérifiez vos données.",
      passwordMismatch: "Les mots de passe ne correspondent pas.",
      success: "Compte créé avec succès! Vérifiez votre email.",
    },
  };

  const t = translations[language as keyof typeof translations];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError(t.passwordMismatch);
      return;
    }

    setIsLoading(true);

    try {
      await signup(formData.email, formData.password, formData.name, formData.type);
      // Redirecionar será feito pelo auth context
    } catch (err) {
      setError(t.error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
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

  const handleFacebookRegister = async () => {
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
            {/* Name */}
            <div>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type="text"
                  placeholder={t.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#0EA5E9] focus:outline-none transition-colors"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

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

            {/* Confirm Password */}
            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={t.confirmPassword}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#0EA5E9] focus:outline-none transition-colors"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Account Type */}
            <div>
              <label className="block text-sm font-medium text-[#8C8C8C] mb-2">{t.type}</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="client"
                    checked={formData.type === "client"}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as "client" | "artist" })}
                    className="w-4 h-4 text-[#0EA5E9] focus:ring-[#0EA5E9] focus:ring-offset-0"
                    disabled={isLoading}
                  />
                  <span className="text-white">{t.client}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="artist"
                    checked={formData.type === "artist"}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as "client" | "artist" })}
                    className="w-4 h-4 text-[#0EA5E9] focus:ring-[#0EA5E9] focus:ring-offset-0"
                    disabled={isLoading}
                  />
                  <span className="text-white">{t.artist}</span>
                </label>
              </div>
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
                  <span>Criando...</span>
                </div>
              ) : (
                t.register
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-[#2C2C2C]" />
              <span className="text-[#8C8C8C] text-sm">{t.or}</span>
              <div className="flex-1 h-px bg-[#2C2C2C]" />
            </div>

            {/* Social Register */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleGoogleRegister}
                disabled={isLoading}
                className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl py-4 font-semibold hover:border-[#0EA5E9] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-xl">🔍</span>
                {t.google}
              </button>
              <button
                type="button"
                onClick={handleFacebookRegister}
                disabled={isLoading}
                className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl py-4 font-semibold hover:border-[#0EA5E9] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-xl">📘</span>
                {t.facebook}
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-[#8C8C8C]">
              {t.haveAccount}{" "}
              <Link href="/login" className="text-[#0EA5E9] hover:underline font-semibold">
                {t.login}
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

        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}