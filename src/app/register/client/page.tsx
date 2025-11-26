"use client";

import { useState, useEffect } from "react";
import { Sparkles, Globe, Mail, Lock, User, Phone, MapPin, ChevronRight, Eye, EyeOff, Check } from "lucide-react";
import Link from "next/link";

export default function RegisterClient() {
  const [language, setLanguage] = useState("PT");
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const translations = {
    PT: {
      title: "Criar Conta de Cliente",
      subtitle: "Encontre os melhores tatuadores e use IA para preview",
      name: "Nome Completo",
      email: "Email",
      phone: "Telefone",
      location: "Localização",
      password: "Senha",
      confirmPassword: "Confirmar Senha",
      terms: "Aceito os termos e condições",
      register: "Criar Conta",
      haveAccount: "Já tem conta?",
      login: "Entrar",
      or: "ou",
      google: "Continuar com Google",
      facebook: "Continuar com Facebook",
    },
    EN: {
      title: "Create Client Account",
      subtitle: "Find the best artists and use AI for preview",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      location: "Location",
      password: "Password",
      confirmPassword: "Confirm Password",
      terms: "I accept the terms and conditions",
      register: "Create Account",
      haveAccount: "Already have an account?",
      login: "Sign In",
      or: "or",
      google: "Continue with Google",
      facebook: "Continue with Facebook",
    },
    DE: {
      title: "Kundenkonto Erstellen",
      subtitle: "Finden Sie die besten Künstler und nutzen Sie KI für Vorschau",
      name: "Vollständiger Name",
      email: "E-Mail",
      phone: "Telefon",
      location: "Standort",
      password: "Passwort",
      confirmPassword: "Passwort Bestätigen",
      terms: "Ich akzeptiere die Geschäftsbedingungen",
      register: "Konto Erstellen",
      haveAccount: "Haben Sie bereits ein Konto?",
      login: "Anmelden",
      or: "oder",
      google: "Mit Google Fortfahren",
      facebook: "Mit Facebook Fortfahren",
    },
    FR: {
      title: "Créer un Compte Client",
      subtitle: "Trouvez les meilleurs artistes et utilisez l'IA pour l'aperçu",
      name: "Nom Complet",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      password: "Mot de Passe",
      confirmPassword: "Confirmer le Mot de Passe",
      terms: "J'accepte les termes et conditions",
      register: "Créer un Compte",
      haveAccount: "Vous avez déjà un compte?",
      login: "Se Connecter",
      or: "ou",
      google: "Continuer avec Google",
      facebook: "Continuer avec Facebook",
    },
  };

  const t = translations[language as keyof typeof translations];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de registro aqui
    console.log("Client registration:", formData);
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

      {/* Back Button */}
      <Link href="/register">
        <div className="absolute top-8 left-8 z-50 flex items-center gap-2 text-[#8C8C8C] hover:text-white transition-colors cursor-pointer">
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span className="text-sm font-medium">Voltar</span>
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
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type="tel"
                  placeholder={t.phone}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#0EA5E9] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type="text"
                  placeholder={t.location}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#0EA5E9] focus:outline-none transition-colors"
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
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C8C8C] hover:text-white transition-colors"
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
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t.confirmPassword}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#0EA5E9] focus:outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C8C8C] hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, terms: !formData.terms })}
                className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                  formData.terms
                    ? "bg-[#0EA5E9] border-[#0EA5E9]"
                    : "bg-transparent border-[#2C2C2C]"
                }`}
              >
                {formData.terms && <Check className="w-4 h-4 text-white" />}
              </button>
              <label className="text-sm text-[#8C8C8C] cursor-pointer" onClick={() => setFormData({ ...formData, terms: !formData.terms })}>
                {t.terms}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.terms}
              className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-xl py-4 font-semibold text-lg shadow-2xl shadow-[#0EA5E9]/50 hover:shadow-[#0EA5E9]/70 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {t.register}
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
                className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl py-4 font-semibold hover:border-[#0EA5E9] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span className="text-xl">🔍</span>
                {t.google}
              </button>
              <button
                type="button"
                className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl py-4 font-semibold hover:border-[#0EA5E9] transition-all duration-300 flex items-center justify-center gap-3"
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
