"use client";

import { useState } from "react";
import { 
  Camera, Upload, Sparkles, Grid3x3, List, 
  Filter, Search, Plus, Edit, Trash2, Eye,
  Star, Heart, MessageSquare, Share2, Download,
  ArrowLeft, Globe, Wand2
} from "lucide-react";
import Link from "next/link";

export default function ArtistPortfolio() {
  const [language, setLanguage] = useState("PT");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedStyle, setSelectedStyle] = useState("all");

  const translations = {
    PT: {
      title: "Portfólio PRO",
      subtitle: "Gerencie suas obras com IA",
      upload: "Upload",
      aiTools: "Ferramentas IA",
      organize: "Organizar por Estilo",
      enhance: "Melhorar Fotos",
      autoTag: "Tags Automáticas",
      allStyles: "Todos os Estilos",
      views: "visualizações",
      likes: "curtidas",
      comments: "comentários",
    },
    EN: {
      title: "PRO Portfolio",
      subtitle: "Manage your work with AI",
      upload: "Upload",
      aiTools: "AI Tools",
      organize: "Organize by Style",
      enhance: "Enhance Photos",
      autoTag: "Auto Tags",
      allStyles: "All Styles",
      views: "views",
      likes: "likes",
      comments: "comments",
    },
    DE: {
      title: "PRO Portfolio",
      subtitle: "Verwalten Sie Ihre Arbeit mit KI",
      upload: "Hochladen",
      aiTools: "KI-Tools",
      organize: "Nach Stil Organisieren",
      enhance: "Fotos Verbessern",
      autoTag: "Auto-Tags",
      allStyles: "Alle Stile",
      views: "Ansichten",
      likes: "Likes",
      comments: "Kommentare",
    },
    FR: {
      title: "Portfolio PRO",
      subtitle: "Gérez votre travail avec l'IA",
      upload: "Télécharger",
      aiTools: "Outils IA",
      organize: "Organiser par Style",
      enhance: "Améliorer les Photos",
      autoTag: "Tags Automatiques",
      allStyles: "Tous les Styles",
      views: "vues",
      likes: "j'aime",
      comments: "commentaires",
    },
  };

  const t = translations[language as keyof typeof translations];

  const styles = [
    "Todos",
    "Realismo",
    "Minimalista",
    "Tradicional",
    "Aquarela",
    "Geométrico",
    "Blackwork",
  ];

  const portfolio = [
    { 
      id: 1, 
      style: "Realismo", 
      views: 1247, 
      likes: 342, 
      comments: 28,
      date: "2024-01-15"
    },
    { 
      id: 2, 
      style: "Minimalista", 
      views: 892, 
      likes: 256, 
      comments: 19,
      date: "2024-01-12"
    },
    { 
      id: 3, 
      style: "Aquarela", 
      views: 1456, 
      likes: 421, 
      comments: 35,
      date: "2024-01-10"
    },
    { 
      id: 4, 
      style: "Tradicional", 
      views: 678, 
      likes: 189, 
      comments: 12,
      date: "2024-01-08"
    },
    { 
      id: 5, 
      style: "Geométrico", 
      views: 1123, 
      likes: 298, 
      comments: 24,
      date: "2024-01-05"
    },
    { 
      id: 6, 
      style: "Blackwork", 
      views: 945, 
      likes: 267, 
      comments: 21,
      date: "2024-01-03"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/artist" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 text-[#8C8C8C] hover:text-white transition-colors" />
              <span className="text-xl font-bold">TATTOO<span className="text-[#0EA5E9]">SYNC</span></span>
            </Link>

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
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Camera className="w-10 h-10 text-[#0EA5E9]" />
            {t.title}
          </h1>
          <p className="text-[#8C8C8C]">{t.subtitle}</p>
        </div>

        {/* AI Tools Bar */}
        <div className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#0284C7]/10 border border-[#0EA5E9]/30 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-[#0EA5E9]" />
            <h2 className="text-xl font-bold">{t.aiTools}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-xl font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/50 transition-all">
              <Wand2 className="w-5 h-5" />
              {t.organize}
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl font-semibold hover:border-[#0EA5E9] transition-colors">
              <Sparkles className="w-5 h-5" />
              {t.enhance}
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl font-semibold hover:border-[#0EA5E9] transition-colors">
              <Star className="w-5 h-5" />
              {t.autoTag}
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Search & Filter */}
          <div className="flex items-center gap-4 flex-1 w-full sm:w-auto">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
              <input
                type="text"
                placeholder="Buscar no portfólio..."
                className="w-full bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-[#8C8C8C] outline-none focus:border-[#0EA5E9] transition-colors"
              />
            </div>
            <button className="p-3 bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl hover:border-[#0EA5E9] transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>

          {/* View Mode & Upload */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-[#0EA5E9] text-white" : "text-[#8C8C8C] hover:text-white"
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-[#0EA5E9] text-white" : "text-[#8C8C8C] hover:text-white"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-xl font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/50 transition-all">
              <Plus className="w-5 h-5" />
              {t.upload}
            </button>
          </div>
        </div>

        {/* Style Filters */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style.toLowerCase())}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedStyle === style.toLowerCase()
                  ? "bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white"
                  : "bg-[#1A1A1A] border border-[#2C2C2C] text-[#8C8C8C] hover:text-white hover:border-[#0EA5E9]"
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl overflow-hidden hover:border-[#0EA5E9] transition-all duration-300 hover:scale-105"
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A] flex items-center justify-center relative overflow-hidden">
                  <Camera className="w-16 h-16 text-[#8C8C8C]" />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button className="p-3 bg-[#0EA5E9] rounded-full hover:bg-[#0284C7] transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-[#1A1A1A] rounded-full hover:bg-[#2C2C2C] transition-colors">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-red-500/20 rounded-full hover:bg-red-500/30 transition-colors">
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#0EA5E9]/20 text-[#0EA5E9] rounded-full text-sm font-semibold">
                      {item.style}
                    </span>
                    <span className="text-xs text-[#8C8C8C]">{item.date}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-[#8C8C8C]">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {portfolio.map((item) => (
              <div
                key={item.id}
                className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6 hover:border-[#0EA5E9] transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Camera className="w-12 h-12 text-[#8C8C8C]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-[#0EA5E9]/20 text-[#0EA5E9] rounded-full text-sm font-semibold">
                        {item.style}
                      </span>
                      <span className="text-sm text-[#8C8C8C]">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-[#8C8C8C] mb-4">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>{item.views} {t.views}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        <span>{item.likes} {t.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>{item.comments} {t.comments}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#0EA5E9] rounded-lg hover:bg-[#0284C7] transition-colors">
                        <Eye className="w-4 h-4" />
                        Ver
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#2C2C2C] rounded-lg hover:bg-[#3C3C3C] transition-colors">
                        <Edit className="w-4 h-4" />
                        Editar
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#2C2C2C] rounded-lg hover:bg-[#3C3C3C] transition-colors">
                        <Share2 className="w-4 h-4" />
                        Partilhar
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#2C2C2C] rounded-lg hover:bg-[#3C3C3C] transition-colors">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
