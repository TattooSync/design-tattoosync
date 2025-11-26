"use client";

import { useState, useEffect } from "react";
import { Sparkles, Globe, Mail, Lock, User, Phone, MapPin, ChevronRight, Eye, EyeOff, Check, Palette, Instagram, Award } from "lucide-react";
import Link from "next/link";

export default function RegisterArtist() {
  const [language, setLanguage] = useState("PT");
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studioName: "",
    location: "",
    specialties: [] as string[],
    experience: "",
    instagram: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const translations = {
    PT: {
      title: "Criar Conta de Tatuador",
      subtitle: "Gerencie seu portfólio e clientes com IA avançada",
      name: "Nome Completo",
      email: "Email",
      phone: "Telefone",
      studioName: "Nome do Estúdio",
      location: "Localização",
      specialties: "Especialidades",
      experience: "Anos de Experiência",
      instagram: "Instagram (opcional)",
      password: "Senha",
      confirmPassword: "Confirmar Senha",
      terms: "Aceito os termos e condições",
      register: "Criar Conta Profissional",
      haveAccount: "Já tem conta?",
      login: "Entrar",
      or: "ou",
      google: "Continuar com Google",
      selectSpecialties: "Selecione suas especialidades",
    },
    EN: {
      title: "Create Artist Account",
      subtitle: "Manage your portfolio and clients with advanced AI",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      studioName: "Studio Name",
      location: "Location",
      specialties: "Specialties",
      experience: "Years of Experience",
      instagram: "Instagram (optional)",
      password: "Password",
      confirmPassword: "Confirm Password",
      terms: "I accept the terms and conditions",
      register: "Create Professional Account",
      haveAccount: "Already have an account?",
      login: "Sign In",
      or: "or",
      google: "Continue with Google",
      selectSpecialties: "Select your specialties",
    },
    DE: {
      title: "Künstlerkonto Erstellen",
      subtitle: "Verwalten Sie Ihr Portfolio und Kunden mit fortschrittlicher KI",
      name: "Vollständiger Name",
      email: "E-Mail",
      phone: "Telefon",
      studioName: "Studio-Name",
      location: "Standort",
      specialties: "Spezialitäten",
      experience: "Jahre Erfahrung",
      instagram: "Instagram (optional)",
      password: "Passwort",
      confirmPassword: "Passwort Bestätigen",
      terms: "Ich akzeptiere die Geschäftsbedingungen",
      register: "Professionelles Konto Erstellen",
      haveAccount: "Haben Sie bereits ein Konto?",
      login: "Anmelden",
      or: "oder",
      google: "Mit Google Fortfahren",
      selectSpecialties: "Wählen Sie Ihre Spezialitäten",
    },
    FR: {
      title: "Créer un Compte Artiste",
      subtitle: "Gérez votre portfolio et clients avec IA avancée",
      name: "Nom Complet",
      email: "Email",
      phone: "Téléphone",
      studioName: "Nom du Studio",
      location: "Localisation",
      specialties: "Spécialités",
      experience: "Années d'Expérience",
      instagram: "Instagram (optionnel)",
      password: "Mot de Passe",
      confirmPassword: "Confirmer le Mot de Passe",
      terms: "J'accepte les termes et conditions",
      register: "Créer un Compte Professionnel",
      haveAccount: "Vous avez déjà un compte?",
      login: "Se Connecter",
      or: "ou",
      google: "Continuer avec Google",
      selectSpecialties: "Sélectionnez vos spécialités",
    },
  };

  const specialtyOptions = [
    "Realismo",
    "Tradicional",
    "Blackwork",
    "Aquarela",
    "Minimalista",
    "Geométrico",
    "Oriental",
    "Tribal",
  ];

  const t = translations[language as keyof typeof translations];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de registro aqui
    console.log("Artist registration:", formData);
  };

  const toggleSpecialty = (specialty: string) => {
    if (formData.specialties.includes(specialty)) {
      setFormData({
        ...formData,
        specialties: formData.specialties.filter((s) => s !== specialty),
      });
    } else {
      setFormData({
        ...formData,
        specialties: [...formData.specialties, specialty],
      });
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-[120px] animate-pulse" />
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
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              TATTOO<span className="text-[#D4AF37]">SYNC</span>
            </h1>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8 animate-fade-in delay-200">
          <h2 className="text-3xl font-bold mb-2">{t.title}</h2>
          <p className="text-[#8C8C8C]">{t.subtitle}</p>
        </div>

        {/* Form */}
        <div className="w-full max-w-2xl animate-fade-in delay-400">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type="text"
                  placeholder={t.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type="email"
                  placeholder={t.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Phone & Studio Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type="tel"
                  placeholder={t.phone}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="relative">
                <Palette className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type="text"
                  placeholder={t.studioName}
                  value={formData.studioName}
                  onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Location & Experience Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type="text"
                  placeholder={t.location}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="relative">
                <Award className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type="number"
                  placeholder={t.experience}
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Instagram */}
            <div className="relative">
              <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
              <input
                type="text"
                placeholder={t.instagram}
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>

            {/* Specialties */}
            <div>
              <label className="text-sm text-[#8C8C8C] mb-3 block">{t.selectSpecialties}</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {specialtyOptions.map((specialty) => (
                  <button
                    key={specialty}
                    type="button"
                    onClick={() => toggleSpecialty(specialty)}
                    className={`px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                      formData.specialties.includes(specialty)
                        ? "bg-[#D4AF37] text-black border-2 border-[#D4AF37]"
                        : "bg-[#1A1A1A] text-white border-2 border-[#2C2C2C] hover:border-[#D4AF37]"
                    }`}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>

            {/* Password & Confirm Password Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={t.password}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#D4AF37] focus:outline-none transition-colors"
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

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t.confirmPassword}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl px-12 py-4 text-white placeholder-[#8C8C8C] focus:border-[#D4AF37] focus:outline-none transition-colors"
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
                    ? "bg-[#D4AF37] border-[#D4AF37]"
                    : "bg-transparent border-[#2C2C2C]"
                }`}
              >
                {formData.terms && <Check className="w-4 h-4 text-black" />}
              </button>
              <label className="text-sm text-[#8C8C8C] cursor-pointer" onClick={() => setFormData({ ...formData, terms: !formData.terms })}>
                {t.terms}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.terms}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-xl py-4 font-semibold text-lg text-black shadow-2xl shadow-[#D4AF37]/50 hover:shadow-[#D4AF37]/70 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
            <button
              type="button"
              className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl py-4 font-semibold hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span className="text-xl">🔍</span>
              {t.google}
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-[#8C8C8C]">
              {t.haveAccount}{" "}
              <Link href="/login" className="text-[#D4AF37] hover:underline font-semibold">
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
