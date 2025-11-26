"use client";

import { useState } from "react";
import { 
  Upload, Camera, Sliders, RotateCw, ZoomIn, ZoomOut, 
  Eye, Download, Share2, Sparkles, ArrowLeft, Globe,
  Move, Maximize2, Minimize2
} from "lucide-react";
import Link from "next/link";

export default function AIPreview() {
  const [language, setLanguage] = useState("PT");
  const [uploadedPhoto, setUploadedPhoto] = useState(false);
  const [uploadedTattoo, setUploadedTattoo] = useState(false);
  const [size, setSize] = useState(50);
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(100);

  const translations = {
    PT: {
      title: "IA Preview",
      subtitle: "Veja sua tattoo antes de tatuar",
      uploadPhoto: "Upload da Foto",
      uploadTattoo: "Upload da Tattoo",
      adjustments: "Ajustes",
      size: "Tamanho",
      rotation: "Rotação",
      opacity: "Opacidade",
      position: "Posição",
      preview: "Preview",
      download: "Baixar",
      share: "Compartilhar",
      aiSize: "IA Tamanho Ideal",
      aging: "Simulação Envelhecimento",
      styles: "Packs de Estilos",
    },
    EN: {
      title: "AI Preview",
      subtitle: "See your tattoo before inking",
      uploadPhoto: "Upload Photo",
      uploadTattoo: "Upload Tattoo",
      adjustments: "Adjustments",
      size: "Size",
      rotation: "Rotation",
      opacity: "Opacity",
      position: "Position",
      preview: "Preview",
      download: "Download",
      share: "Share",
      aiSize: "AI Ideal Size",
      aging: "Aging Simulation",
      styles: "Style Packs",
    },
    DE: {
      title: "KI Vorschau",
      subtitle: "Sehen Sie Ihr Tattoo vor dem Stechen",
      uploadPhoto: "Foto Hochladen",
      uploadTattoo: "Tattoo Hochladen",
      adjustments: "Anpassungen",
      size: "Größe",
      rotation: "Drehung",
      opacity: "Deckkraft",
      position: "Position",
      preview: "Vorschau",
      download: "Herunterladen",
      share: "Teilen",
      aiSize: "KI Ideale Größe",
      aging: "Alterungssimulation",
      styles: "Stil-Pakete",
    },
    FR: {
      title: "Aperçu IA",
      subtitle: "Voyez votre tatouage avant de l'encrer",
      uploadPhoto: "Télécharger Photo",
      uploadTattoo: "Télécharger Tatouage",
      adjustments: "Ajustements",
      size: "Taille",
      rotation: "Rotation",
      opacity: "Opacité",
      position: "Position",
      preview: "Aperçu",
      download: "Télécharger",
      share: "Partager",
      aiSize: "Taille Idéale IA",
      aging: "Simulation Vieillissement",
      styles: "Packs de Styles",
    },
  };

  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/client" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 text-[#8C8C8C] hover:text-white transition-colors" />
              <span className="text-xl font-bold">TATTOO<span className="text-[#0EA5E9]">SYNC</span></span>
            </Link>

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
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-10 h-10 text-[#0EA5E9]" />
            {t.title}
          </h1>
          <p className="text-xl text-[#8C8C8C]">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Upload & Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upload Photo */}
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-[#0EA5E9]" />
                {t.uploadPhoto}
              </h3>
              <button 
                onClick={() => setUploadedPhoto(true)}
                className="w-full h-32 border-2 border-dashed border-[#2C2C2C] rounded-xl hover:border-[#0EA5E9] transition-colors flex flex-col items-center justify-center gap-2"
              >
                <Upload className="w-8 h-8 text-[#8C8C8C]" />
                <span className="text-sm text-[#8C8C8C]">Clique para fazer upload</span>
              </button>
            </div>

            {/* Upload Tattoo */}
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#0EA5E9]" />
                {t.uploadTattoo}
              </h3>
              <button 
                onClick={() => setUploadedTattoo(true)}
                className="w-full h-32 border-2 border-dashed border-[#2C2C2C] rounded-xl hover:border-[#0EA5E9] transition-colors flex flex-col items-center justify-center gap-2"
              >
                <Upload className="w-8 h-8 text-[#8C8C8C]" />
                <span className="text-sm text-[#8C8C8C]">Clique para fazer upload</span>
              </button>
            </div>

            {/* Adjustments */}
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-[#0EA5E9]" />
                {t.adjustments}
              </h3>

              <div className="space-y-4">
                {/* Size */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#8C8C8C]">{t.size}</span>
                    <span className="text-sm font-bold">{size}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Rotation */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#8C8C8C]">{t.rotation}</span>
                    <span className="text-sm font-bold">{rotation}°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={rotation}
                    onChange={(e) => setRotation(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Opacity */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#8C8C8C]">{t.opacity}</span>
                    <span className="text-sm font-bold">{opacity}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={opacity}
                    onChange={(e) => setOpacity(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Position Controls */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#2C2C2C] rounded-lg hover:bg-[#3C3C3C] transition-colors">
                    <Move className="w-4 h-4" />
                    <span className="text-sm">{t.position}</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#2C2C2C] rounded-lg hover:bg-[#3C3C3C] transition-colors">
                    <RotateCw className="w-4 h-4" />
                    <span className="text-sm">Reset</span>
                  </button>
                </div>
              </div>
            </div>

            {/* AI Features */}
            <div className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#0284C7]/10 border border-[#0EA5E9]/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#0EA5E9]" />
                Funcionalidades IA
              </h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/50 transition-all">
                  {t.aiSize}
                </button>
                <button className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2C2C2C] rounded-lg font-semibold hover:border-[#0EA5E9] transition-colors">
                  {t.aging}
                </button>
                <button className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2C2C2C] rounded-lg font-semibold hover:border-[#0EA5E9] transition-colors">
                  {t.styles}
                </button>
              </div>
            </div>
          </div>

          {/* Center Panel - Preview */}
          <div className="lg:col-span-2">
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#0EA5E9]" />
                  {t.preview}
                </h3>
                <div className="flex gap-3">
                  <button className="p-2 bg-[#2C2C2C] rounded-lg hover:bg-[#3C3C3C] transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-[#2C2C2C] rounded-lg hover:bg-[#3C3C3C] transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Preview Area */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A] rounded-xl overflow-hidden flex items-center justify-center">
                {!uploadedPhoto && !uploadedTattoo ? (
                  <div className="text-center">
                    <Camera className="w-16 h-16 text-[#8C8C8C] mx-auto mb-4" />
                    <p className="text-[#8C8C8C]">Faça upload da foto e da tattoo para ver o preview</p>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Simulated Preview */}
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Sparkles className="w-16 h-16 text-white" />
                      </div>
                      <p className="text-[#8C8C8C]">Preview da tattoo aparecerá aqui</p>
                      <p className="text-sm text-[#8C8C8C] mt-2">
                        Tamanho: {size}% | Rotação: {rotation}° | Opacidade: {opacity}%
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                <button className="flex flex-col items-center gap-2 p-4 bg-[#2C2C2C] rounded-lg hover:bg-[#3C3C3C] transition-colors">
                  <ZoomIn className="w-5 h-5" />
                  <span className="text-xs">Zoom In</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 bg-[#2C2C2C] rounded-lg hover:bg-[#3C3C3C] transition-colors">
                  <ZoomOut className="w-5 h-5" />
                  <span className="text-xs">Zoom Out</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 bg-[#2C2C2C] rounded-lg hover:bg-[#3C3C3C] transition-colors">
                  <Maximize2 className="w-5 h-5" />
                  <span className="text-xs">Aumentar</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 bg-[#2C2C2C] rounded-lg hover:bg-[#3C3C3C] transition-colors">
                  <Minimize2 className="w-5 h-5" />
                  <span className="text-xs">Diminuir</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
