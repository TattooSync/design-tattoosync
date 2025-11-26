"use client";

import { useState, useEffect } from "react";
import { Sparkles, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [language, setLanguage] = useState("PT");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const translations = {
    PT: {
      tagline: "O Futuro da Tatuagem",
      subtitle: "Tecnologia de IA + Arte Premium",
      cta: "Começar Agora",
      forClients: "Para Clientes",
      forArtists: "Para Tatuadores",
    },
    EN: {
      tagline: "The Future of Tattoo Art",
      subtitle: "AI Technology + Premium Art",
      cta: "Get Started",
      forClients: "For Clients",
      forArtists: "For Artists",
    },
    DE: {
      tagline: "Die Zukunft der Tätowierung",
      subtitle: "KI-Technologie + Premium-Kunst",
      cta: "Jetzt Starten",
      forClients: "Für Kunden",
      forArtists: "Für Tätowierer",
    },
    FR: {
      tagline: "L'Avenir du Tatouage",
      subtitle: "Technologie IA + Art Premium",
      cta: "Commencer",
      forClients: "Pour Clients",
      forArtists: "Pour Artistes",
    },
  };

  const t = translations[language as keyof typeof translations];

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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#0EA5E9]/50">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              TATTOO<span className="text-[#0EA5E9]">SYNC</span>
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-16 max-w-4xl animate-fade-in delay-200">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#0EA5E9] to-white bg-clip-text text-transparent">
            {t.tagline}
          </h2>
          <p className="text-xl sm:text-2xl text-[#8C8C8C] font-light">
            {t.subtitle}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-20 animate-fade-in delay-400">
          <Link href="/client">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-2xl font-semibold text-lg shadow-2xl shadow-[#0EA5E9]/50 hover:shadow-[#0EA5E9]/70 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                {t.forClients}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>

          <Link href="/artist">
            <button className="group relative px-8 py-4 bg-[#1A1A1A] border-2 border-[#2C2C2C] rounded-2xl font-semibold text-lg hover:border-[#0EA5E9] transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                {t.forArtists}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl animate-fade-in delay-600">
          {[
            { icon: "🤖", title: "IA Avançada", desc: "Preview em tempo real" },
            { icon: "💎", title: "Premium", desc: "Design de luxo" },
            { icon: "🌍", title: "Global", desc: "Multilíngua" },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6 hover:border-[#0EA5E9] transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-[#8C8C8C]">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing Link */}
        <div className="mt-12 animate-fade-in delay-700">
          <Link href="/pricing">
            <button className="px-8 py-3 bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl font-semibold hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center gap-2">
              <span className="text-[#D4AF37]">👑</span>
              Ver Planos Premium
            </button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex gap-6 animate-fade-in delay-800">
          <a
            href="https://instagram.com/tattoosync"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#1A1A1A] border border-[#2C2C2C] rounded-full flex items-center justify-center hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all duration-300"
          >
            <span className="text-xl">📷</span>
          </a>
          <a
            href="https://tiktok.com/@tattoosync"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#1A1A1A] border border-[#2C2C2C] rounded-full flex items-center justify-center hover:border-[#00F2EA] hover:bg-[#00F2EA]/10 transition-all duration-300"
          >
            <span className="text-xl">🎵</span>
          </a>
          <a
            href="https://linkedin.com/company/tattoosync"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#1A1A1A] border border-[#2C2C2C] rounded-full flex items-center justify-center hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-300"
          >
            <span className="text-xl">💼</span>
          </a>
        </div>
      </div>
    </div>
  );
}