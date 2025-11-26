"use client";

import { useState } from "react";
import { 
  Check, Sparkles, Crown, Zap, TrendingUp, 
  Globe, ArrowLeft, Star, Shield, Infinity
} from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const [language, setLanguage] = useState("PT");
  const [userType, setUserType] = useState<"client" | "artist">("client");

  const translations = {
    PT: {
      title: "Planos Premium",
      subtitle: "Escolha o plano perfeito para você",
      clients: "Clientes",
      artists: "Tatuadores",
      month: "/mês",
      popular: "Mais Popular",
      best: "Melhor Valor",
      free: "Grátis",
      selectPlan: "Escolher Plano",
      credits: "Créditos IA",
      buyCredits: "Comprar Créditos",
      comparison: "Por que Premium é melhor?",
    },
    EN: {
      title: "Premium Plans",
      subtitle: "Choose the perfect plan for you",
      clients: "Clients",
      artists: "Artists",
      month: "/month",
      popular: "Most Popular",
      best: "Best Value",
      free: "Free",
      selectPlan: "Select Plan",
      credits: "AI Credits",
      buyCredits: "Buy Credits",
      comparison: "Why Premium is better?",
    },
    DE: {
      title: "Premium-Pläne",
      subtitle: "Wählen Sie den perfekten Plan für Sie",
      clients: "Kunden",
      artists: "Künstler",
      month: "/Monat",
      popular: "Am Beliebtesten",
      best: "Bester Wert",
      free: "Kostenlos",
      selectPlan: "Plan Wählen",
      credits: "KI-Credits",
      buyCredits: "Credits Kaufen",
      comparison: "Warum Premium besser ist?",
    },
    FR: {
      title: "Plans Premium",
      subtitle: "Choisissez le plan parfait pour vous",
      clients: "Clients",
      artists: "Artistes",
      month: "/mois",
      popular: "Le Plus Populaire",
      best: "Meilleure Valeur",
      free: "Gratuit",
      selectPlan: "Choisir le Plan",
      credits: "Crédits IA",
      buyCredits: "Acheter des Crédits",
      comparison: "Pourquoi Premium est meilleur?",
    },
  };

  const t = translations[language as keyof typeof translations];

  const clientPlans = [
    {
      name: "FREE",
      price: "0",
      features: [
        "3 previews IA/mês",
        "Busca básica",
        "Chat limitado",
        "1 tattoo na carteira",
      ],
      color: "from-[#2C2C2C] to-[#1A1A1A]",
      border: "border-[#2C2C2C]",
    },
    {
      name: "PLUS",
      price: "3.49",
      popular: true,
      features: [
        "20 previews IA/mês",
        "Busca avançada",
        "Chat ilimitado",
        "10 tattoos na carteira",
        "IA Tamanho Ideal",
        "Simulação envelhecimento",
      ],
      color: "from-[#0EA5E9] to-[#0284C7]",
      border: "border-[#0EA5E9]",
    },
    {
      name: "PREMIUM",
      price: "6.99",
      best: true,
      features: [
        "Previews IA ILIMITADOS",
        "Todas as funcionalidades PLUS",
        "Packs IA de estilos",
        "Preview em vídeo",
        "Comparação lado a lado",
        "Suporte prioritário",
        "Sem anúncios",
      ],
      color: "from-[#D4AF37] to-[#B8941F]",
      border: "border-[#D4AF37]",
    },
  ];

  const artistPlans = [
    {
      name: "BASIC",
      price: "9.99",
      features: [
        "Perfil básico",
        "Até 50 clientes",
        "Agenda simples",
        "Chat com clientes",
        "5 fotos no portfólio",
      ],
      color: "from-[#2C2C2C] to-[#1A1A1A]",
      border: "border-[#2C2C2C]",
    },
    {
      name: "PRO",
      price: "19.99",
      popular: true,
      features: [
        "Perfil PRO destacado",
        "Clientes ilimitados",
        "Agenda avançada",
        "Gestão de stock",
        "Portfólio ilimitado",
        "IA: Fichas automáticas",
        "IA: Correção de fotos",
        "Estatísticas avançadas",
      ],
      color: "from-[#0EA5E9] to-[#0284C7]",
      border: "border-[#0EA5E9]",
    },
    {
      name: "STUDIO",
      price: "49.99",
      best: true,
      features: [
        "Todas as funcionalidades PRO",
        "Múltiplos tatuadores",
        "Agenda de equipa",
        "Gestão de estúdio",
        "Relatórios financeiros",
        "IA: Organização por estilo",
        "API de integração",
        "Suporte dedicado 24/7",
      ],
      color: "from-[#D4AF37] to-[#B8941F]",
      border: "border-[#D4AF37]",
    },
  ];

  const creditPacks = [
    { amount: 10, price: "2.49", perCredit: "0.25" },
    { amount: 25, price: "4.99", perCredit: "0.20" },
    { amount: 60, price: "9.99", perCredit: "0.17", popular: true },
    { amount: 150, price: "19.99", perCredit: "0.13" },
    { amount: 400, price: "39.99", perCredit: "0.10" },
    { amount: 1000, price: "79.99", perCredit: "0.08", best: true },
  ];

  const plans = userType === "client" ? clientPlans : artistPlans;

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
            <Crown className="w-10 h-10 text-[#D4AF37]" />
            {t.title}
          </h1>
          <p className="text-xl text-[#8C8C8C]">{t.subtitle}</p>
        </div>

        {/* User Type Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#1A1A1A] border border-[#2C2C2C] rounded-full p-1">
            <button
              onClick={() => setUserType("client")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                userType === "client"
                  ? "bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white"
                  : "text-[#8C8C8C] hover:text-white"
              }`}
            >
              {t.clients}
            </button>
            <button
              onClick={() => setUserType("artist")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                userType === "artist"
                  ? "bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white"
                  : "text-[#8C8C8C] hover:text-white"
              }`}
            >
              {t.artists}
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-gradient-to-br ${plan.color} rounded-2xl p-8 border-2 ${plan.border} ${
                plan.popular || plan.best ? "scale-105 shadow-2xl" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0EA5E9] rounded-full text-sm font-bold">
                  {t.popular}
                </div>
              )}
              {plan.best && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF37] rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-white" />
                  {t.best}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">€{plan.price}</span>
                  {plan.price !== "0" && <span className="text-[#8C8C8C]">{t.month}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-colors">
                {t.selectPlan}
              </button>
            </div>
          ))}
        </div>

        {/* Credits Section */}
        {userType === "client" && (
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 text-[#D4AF37]" />
                {t.credits}
              </h2>
              <p className="text-[#8C8C8C]">Ou compre créditos avulsos (não recomendado)</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {creditPacks.map((pack, i) => (
                <div
                  key={i}
                  className={`relative bg-[#1A1A1A] border-2 ${
                    pack.popular || pack.best ? "border-[#0EA5E9]" : "border-[#2C2C2C]"
                  } rounded-xl p-4 hover:border-[#0EA5E9] transition-all hover:scale-105`}
                >
                  {pack.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#0EA5E9] rounded-full text-xs font-bold">
                      Popular
                    </div>
                  )}
                  {pack.best && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#D4AF37] rounded-full text-xs font-bold">
                      Melhor
                    </div>
                  )}
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold mb-1">{pack.amount}</div>
                    <div className="text-xs text-[#8C8C8C]">créditos</div>
                  </div>
                  <div className="text-center mb-3">
                    <div className="text-xl font-bold">€{pack.price}</div>
                    <div className="text-xs text-[#8C8C8C]">€{pack.perCredit}/crédito</div>
                  </div>
                  <button className="w-full py-2 bg-[#2C2C2C] rounded-lg text-sm font-semibold hover:bg-[#3C3C3C] transition-colors">
                    Comprar
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Comparison */}
        <section className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#0284C7]/10 border border-[#0EA5E9]/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <TrendingUp className="w-8 h-8 text-[#0EA5E9]" />
            {t.comparison}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-[#8C8C8C]">Comprando Créditos</h3>
              <ul className="space-y-3 text-[#8C8C8C]">
                <li>• 60 créditos = €9.99</li>
                <li>• Válido por 30 dias</li>
                <li>• Sem funcionalidades extras</li>
                <li>• Preço por uso: €0.17/preview</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/20 border-2 border-[#D4AF37] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Crown className="w-6 h-6 text-[#D4AF37]" />
                PREMIUM €6.99
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Infinity className="w-5 h-5 text-[#D4AF37]" />
                  Previews ILIMITADOS
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#D4AF37]" />
                  Todas as funcionalidades IA
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  Packs de estilos premium
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#D4AF37]" />
                  Suporte prioritário
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
