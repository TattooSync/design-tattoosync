"use client";

import { useState } from "react";
import { 
  Sparkles, Search, MessageSquare, Calendar, Wallet, 
  Camera, Zap, TrendingUp, Globe, ArrowLeft, Menu, X,
  Upload, Sliders, RotateCw, ZoomIn, ZoomOut, Eye
} from "lucide-react";
import Link from "next/link";

export default function ClientHome() {
  const [language, setLanguage] = useState("PT");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("explore");

  const translations = {
    PT: {
      explore: "Explorar",
      book: "Agendar",
      chat: "Chat",
      wallet: "Carteira",
      ai: "IA Preview",
      profile: "Perfil",
      searchPlaceholder: "Buscar tatuadores por estilo...",
      featured: "Tatuadores em Destaque",
      aiFeatures: "Funcionalidades IA",
      tryPreview: "Experimentar Preview",
      sizeAI: "IA Tamanho Ideal",
      aging: "Simulação Envelhecimento",
      styles: "Packs de Estilos",
    },
    EN: {
      explore: "Explore",
      book: "Book",
      chat: "Chat",
      wallet: "Wallet",
      ai: "AI Preview",
      profile: "Profile",
      searchPlaceholder: "Search artists by style...",
      featured: "Featured Artists",
      aiFeatures: "AI Features",
      tryPreview: "Try Preview",
      sizeAI: "Ideal Size AI",
      aging: "Aging Simulation",
      styles: "Style Packs",
    },
    DE: {
      explore: "Erkunden",
      book: "Buchen",
      chat: "Chat",
      wallet: "Brieftasche",
      ai: "KI Vorschau",
      profile: "Profil",
      searchPlaceholder: "Künstler nach Stil suchen...",
      featured: "Empfohlene Künstler",
      aiFeatures: "KI-Funktionen",
      tryPreview: "Vorschau Testen",
      sizeAI: "Ideale Größe KI",
      aging: "Alterungssimulation",
      styles: "Stil-Pakete",
    },
    FR: {
      explore: "Explorer",
      book: "Réserver",
      chat: "Chat",
      wallet: "Portefeuille",
      ai: "Aperçu IA",
      profile: "Profil",
      searchPlaceholder: "Rechercher des artistes par style...",
      featured: "Artistes en Vedette",
      aiFeatures: "Fonctionnalités IA",
      tryPreview: "Essayer l'Aperçu",
      sizeAI: "Taille Idéale IA",
      aging: "Simulation Vieillissement",
      styles: "Packs de Styles",
    },
  };

  const t = translations[language as keyof typeof translations];

  const artists = [
    { name: "Marco Silva", style: "Realismo", rating: 4.9, sessions: 342 },
    { name: "Ana Costa", style: "Minimalista", rating: 4.8, sessions: 289 },
    { name: "João Ferreira", style: "Tradicional", rating: 5.0, sessions: 456 },
    { name: "Sofia Martins", style: "Aquarela", rating: 4.9, sessions: 198 },
  ];

  const aiFeatures = [
    { icon: Camera, title: t.tryPreview, desc: "Preview em tempo real na pele" },
    { icon: Sliders, title: t.sizeAI, desc: "IA calcula tamanho perfeito" },
    { icon: TrendingUp, title: t.aging, desc: "Veja como envelhece (6m-10a)" },
    { icon: Sparkles, title: t.styles, desc: "Packs IA de estilos premium" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 text-[#8C8C8C] hover:text-white transition-colors" />
              <span className="text-xl font-bold">TATTOO<span className="text-[#0EA5E9]">SYNC</span></span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6">
              <button className="text-[#8C8C8C] hover:text-white transition-colors">{t.explore}</button>
              <button className="text-[#8C8C8C] hover:text-white transition-colors">{t.book}</button>
              <button className="text-[#8C8C8C] hover:text-white transition-colors">{t.chat}</button>
              <button className="text-[#8C8C8C] hover:text-white transition-colors">{t.wallet}</button>
              <Link href="/client/ai-preview">
                <button className="px-4 py-2 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/50 transition-all">
                  {t.ai}
                </button>
              </Link>
            </nav>

            {/* Language + Mobile Menu */}
            <div className="flex items-center gap-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-lg px-3 py-1 text-sm outline-none"
              >
                <option value="PT">🇵🇹</option>
                <option value="EN">🇬🇧</option>
                <option value="DE">🇩🇪</option>
                <option value="FR">🇫🇷</option>
              </select>

              <button 
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0A0A0A] border-t border-[#2C2C2C]">
            <nav className="flex flex-col p-4 gap-3">
              <button className="text-left py-2 hover:text-[#0EA5E9] transition-colors">{t.explore}</button>
              <button className="text-left py-2 hover:text-[#0EA5E9] transition-colors">{t.book}</button>
              <button className="text-left py-2 hover:text-[#0EA5E9] transition-colors">{t.chat}</button>
              <button className="text-left py-2 hover:text-[#0EA5E9] transition-colors">{t.wallet}</button>
              <Link href="/client/ai-preview">
                <button className="w-full py-2 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-lg font-semibold">
                  {t.ai}
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-[#8C8C8C] outline-none focus:border-[#0EA5E9] transition-colors"
            />
          </div>
        </div>

        {/* AI Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#0EA5E9]" />
            {t.aiFeatures}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, i) => (
              <Link key={i} href="/client/ai-preview">
                <div className="group bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#2C2C2C] rounded-2xl p-6 hover:border-[#0EA5E9] transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-[#0EA5E9]/50 transition-all">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#8C8C8C]">{feature.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Artists */}
        <section>
          <h2 className="text-3xl font-bold mb-8">{t.featured}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist, i) => (
              <div
                key={i}
                className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl overflow-hidden hover:border-[#0EA5E9] transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A] flex items-center justify-center">
                  <Camera className="w-16 h-16 text-[#8C8C8C]" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
                  <p className="text-sm text-[#0EA5E9] mb-3">{artist.style}</p>
                  <div className="flex items-center justify-between text-sm text-[#8C8C8C]">
                    <span>⭐ {artist.rating}</span>
                    <span>{artist.sessions} sessões</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-[#2C2C2C] md:hidden">
        <div className="flex items-center justify-around py-3">
          <button className="flex flex-col items-center gap-1 text-[#0EA5E9]">
            <Search className="w-6 h-6" />
            <span className="text-xs">{t.explore}</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#8C8C8C]">
            <Calendar className="w-6 h-6" />
            <span className="text-xs">{t.book}</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#8C8C8C]">
            <MessageSquare className="w-6 h-6" />
            <span className="text-xs">{t.chat}</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#8C8C8C]">
            <Wallet className="w-6 h-6" />
            <span className="text-xs">{t.wallet}</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
