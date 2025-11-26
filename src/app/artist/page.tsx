"use client";

import { useState } from "react";
import { 
  LayoutDashboard, Calendar, Users, Package, 
  TrendingUp, DollarSign, AlertTriangle, Star,
  Camera, MessageSquare, Settings, ArrowLeft, Globe,
  Clock, CheckCircle, XCircle, Sparkles
} from "lucide-react";
import Link from "next/link";

export default function ArtistHome() {
  const [language, setLanguage] = useState("PT");

  const translations = {
    PT: {
      dashboard: "Dashboard",
      today: "Hoje",
      sessions: "Sessões",
      pending: "Pendentes",
      revenue: "Receita",
      clients: "Clientes",
      todaySessions: "Sessões de Hoje",
      alerts: "Alertas",
      quickActions: "Ações Rápidas",
      portfolio: "Portfólio",
      schedule: "Agenda",
      stock: "Stock",
      chat: "Chat",
      aiTools: "Ferramentas IA",
      stats: "Estatísticas",
    },
    EN: {
      dashboard: "Dashboard",
      today: "Today",
      sessions: "Sessions",
      pending: "Pending",
      revenue: "Revenue",
      clients: "Clients",
      todaySessions: "Today's Sessions",
      alerts: "Alerts",
      quickActions: "Quick Actions",
      portfolio: "Portfolio",
      schedule: "Schedule",
      stock: "Stock",
      chat: "Chat",
      aiTools: "AI Tools",
      stats: "Statistics",
    },
    DE: {
      dashboard: "Dashboard",
      today: "Heute",
      sessions: "Sitzungen",
      pending: "Ausstehend",
      revenue: "Umsatz",
      clients: "Kunden",
      todaySessions: "Heutige Sitzungen",
      alerts: "Warnungen",
      quickActions: "Schnellaktionen",
      portfolio: "Portfolio",
      schedule: "Zeitplan",
      stock: "Lager",
      chat: "Chat",
      aiTools: "KI-Tools",
      stats: "Statistiken",
    },
    FR: {
      dashboard: "Tableau de Bord",
      today: "Aujourd'hui",
      sessions: "Séances",
      pending: "En Attente",
      revenue: "Revenu",
      clients: "Clients",
      todaySessions: "Séances d'Aujourd'hui",
      alerts: "Alertes",
      quickActions: "Actions Rapides",
      portfolio: "Portfolio",
      schedule: "Calendrier",
      stock: "Stock",
      chat: "Chat",
      aiTools: "Outils IA",
      stats: "Statistiques",
    },
  };

  const t = translations[language as keyof typeof translations];

  const stats = [
    { icon: Calendar, label: t.sessions, value: "8", color: "from-[#0EA5E9] to-[#0284C7]" },
    { icon: DollarSign, label: t.pending, value: "€450", color: "from-[#D4AF37] to-[#B8941F]" },
    { icon: TrendingUp, label: t.revenue, value: "€2.8k", color: "from-[#10B981] to-[#059669]" },
    { icon: Users, label: t.clients, value: "142", color: "from-[#8B5CF6] to-[#7C3AED]" },
  ];

  const todaySessions = [
    { time: "10:00", client: "Maria Silva", type: "Realismo", status: "confirmed" },
    { time: "14:00", client: "João Costa", type: "Minimalista", status: "confirmed" },
    { time: "16:30", client: "Ana Ferreira", type: "Aquarela", status: "pending" },
  ];

  const alerts = [
    { type: "warning", message: "Stock crítico: Tinta preta (2 unidades)" },
    { type: "info", message: "Cliente sem referência: Pedro Santos" },
    { type: "alert", message: "Alergia: Maria Silva - látex" },
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
              <button className="p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <LayoutDashboard className="w-10 h-10 text-[#0EA5E9]" />
            {t.dashboard}
          </h1>
          <p className="text-[#8C8C8C]">{t.today}: {new Date().toLocaleDateString('pt-PT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6 hover:border-[#0EA5E9] transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-[#8C8C8C] mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Sessions */}
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-[#0EA5E9]" />
                {t.todaySessions}
              </h2>
              <div className="space-y-4">
                {todaySessions.map((session, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-[#0A0A0A] border border-[#2C2C2C] rounded-xl hover:border-[#0EA5E9] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <Clock className="w-5 h-5 text-[#0EA5E9] mb-1" />
                        <span className="text-sm font-bold">{session.time}</span>
                      </div>
                      <div>
                        <p className="font-bold">{session.client}</p>
                        <p className="text-sm text-[#8C8C8C]">{session.type}</p>
                      </div>
                    </div>
                    <div>
                      {session.status === "confirmed" ? (
                        <CheckCircle className="w-6 h-6 text-[#10B981]" />
                      ) : (
                        <Clock className="w-6 h-6 text-[#D4AF37]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6">{t.quickActions}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Link href="/artist/portfolio">
                  <button className="flex flex-col items-center gap-3 p-4 bg-[#0A0A0A] border border-[#2C2C2C] rounded-xl hover:border-[#0EA5E9] transition-all hover:scale-105">
                    <Camera className="w-8 h-8 text-[#0EA5E9]" />
                    <span className="text-sm font-semibold">{t.portfolio}</span>
                  </button>
                </Link>
                <button className="flex flex-col items-center gap-3 p-4 bg-[#0A0A0A] border border-[#2C2C2C] rounded-xl hover:border-[#0EA5E9] transition-all hover:scale-105">
                  <Calendar className="w-8 h-8 text-[#0EA5E9]" />
                  <span className="text-sm font-semibold">{t.schedule}</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-4 bg-[#0A0A0A] border border-[#2C2C2C] rounded-xl hover:border-[#0EA5E9] transition-all hover:scale-105">
                  <Package className="w-8 h-8 text-[#0EA5E9]" />
                  <span className="text-sm font-semibold">{t.stock}</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-4 bg-[#0A0A0A] border border-[#2C2C2C] rounded-xl hover:border-[#0EA5E9] transition-all hover:scale-105">
                  <MessageSquare className="w-8 h-8 text-[#0EA5E9]" />
                  <span className="text-sm font-semibold">{t.chat}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Alerts */}
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-[#D4AF37]" />
                {t.alerts}
              </h2>
              <div className="space-y-3">
                {alerts.map((alert, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border ${
                      alert.type === "warning"
                        ? "bg-[#D4AF37]/10 border-[#D4AF37]/30"
                        : alert.type === "alert"
                        ? "bg-red-500/10 border-red-500/30"
                        : "bg-[#0EA5E9]/10 border-[#0EA5E9]/30"
                    }`}
                  >
                    <p className="text-sm">{alert.message}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Tools */}
            <div className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#0284C7]/10 border border-[#0EA5E9]/30 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#0EA5E9]" />
                {t.aiTools}
              </h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/50 transition-all">
                  Fichas Automáticas
                </button>
                <button className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2C2C2C] rounded-lg font-semibold hover:border-[#0EA5E9] transition-colors">
                  Correção de Fotos
                </button>
                <button className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2C2C2C] rounded-lg font-semibold hover:border-[#0EA5E9] transition-colors">
                  Organizar por Estilo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#0EA5E9]" />
                {t.stats}
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#8C8C8C]">Este Mês</span>
                    <span className="text-sm font-bold">€8.4k</span>
                  </div>
                  <div className="h-2 bg-[#2C2C2C] rounded-full overflow-hidden">
                    <div className="h-full w-[84%] bg-gradient-to-r from-[#0EA5E9] to-[#0284C7]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#8C8C8C]">Sessões</span>
                    <span className="text-sm font-bold">42</span>
                  </div>
                  <div className="h-2 bg-[#2C2C2C] rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-gradient-to-r from-[#10B981] to-[#059669]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#8C8C8C]">Avaliação</span>
                    <span className="text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                      4.9
                    </span>
                  </div>
                  <div className="h-2 bg-[#2C2C2C] rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-gradient-to-r from-[#D4AF37] to-[#B8941F]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
