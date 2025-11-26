"use client";

import { useState } from "react";
import { 
  Users, DollarSign, Sparkles, TrendingUp, 
  Shield, AlertTriangle, Settings, Search,
  CheckCircle, XCircle, Crown, Zap, Eye,
  BarChart3, PieChart, Activity, Globe
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [language, setLanguage] = useState("PT");
  const [activeTab, setActiveTab] = useState("overview");

  const translations = {
    PT: {
      title: "Admin Dashboard",
      overview: "Visão Geral",
      users: "Utilizadores",
      payments: "Pagamentos",
      ai: "IA",
      content: "Conteúdo",
      moderation: "Moderação",
      totalUsers: "Total Utilizadores",
      activeSubscriptions: "Subscrições Ativas",
      revenue: "Receita Mensal",
      aiUsage: "Uso IA",
      recentActivity: "Atividade Recente",
      topArtists: "Top Tatuadores",
      stats: "Estatísticas",
    },
    EN: {
      title: "Admin Dashboard",
      overview: "Overview",
      users: "Users",
      payments: "Payments",
      ai: "AI",
      content: "Content",
      moderation: "Moderation",
      totalUsers: "Total Users",
      activeSubscriptions: "Active Subscriptions",
      revenue: "Monthly Revenue",
      aiUsage: "AI Usage",
      recentActivity: "Recent Activity",
      topArtists: "Top Artists",
      stats: "Statistics",
    },
    DE: {
      title: "Admin Dashboard",
      overview: "Übersicht",
      users: "Benutzer",
      payments: "Zahlungen",
      ai: "KI",
      content: "Inhalt",
      moderation: "Moderation",
      totalUsers: "Gesamtbenutzer",
      activeSubscriptions: "Aktive Abonnements",
      revenue: "Monatlicher Umsatz",
      aiUsage: "KI-Nutzung",
      recentActivity: "Letzte Aktivität",
      topArtists: "Top-Künstler",
      stats: "Statistiken",
    },
    FR: {
      title: "Tableau de Bord Admin",
      overview: "Vue d'Ensemble",
      users: "Utilisateurs",
      payments: "Paiements",
      ai: "IA",
      content: "Contenu",
      moderation: "Modération",
      totalUsers: "Total Utilisateurs",
      activeSubscriptions: "Abonnements Actifs",
      revenue: "Revenu Mensuel",
      aiUsage: "Utilisation IA",
      recentActivity: "Activité Récente",
      topArtists: "Top Artistes",
      stats: "Statistiques",
    },
  };

  const t = translations[language as keyof typeof translations];

  const kpis = [
    { 
      icon: Users, 
      label: t.totalUsers, 
      value: "12,847", 
      change: "+12.5%",
      color: "from-[#0EA5E9] to-[#0284C7]" 
    },
    { 
      icon: Crown, 
      label: t.activeSubscriptions, 
      value: "3,421", 
      change: "+8.2%",
      color: "from-[#D4AF37] to-[#B8941F]" 
    },
    { 
      icon: DollarSign, 
      label: t.revenue, 
      value: "€84.2k", 
      change: "+15.3%",
      color: "from-[#10B981] to-[#059669]" 
    },
    { 
      icon: Sparkles, 
      label: t.aiUsage, 
      value: "156k", 
      change: "+23.7%",
      color: "from-[#8B5CF6] to-[#7C3AED]" 
    },
  ];

  const recentActivity = [
    { user: "Maria Silva", action: "Upgrade para PREMIUM", time: "2 min atrás", type: "success" },
    { user: "João Costa", action: "Nova sessão agendada", time: "5 min atrás", type: "info" },
    { user: "Ana Ferreira", action: "Report de conteúdo", time: "12 min atrás", type: "warning" },
    { user: "Pedro Santos", action: "Cancelou subscrição", time: "18 min atrás", type: "error" },
    { user: "Sofia Martins", action: "Novo tatuador aprovado", time: "25 min atrás", type: "success" },
  ];

  const topArtists = [
    { name: "Marco Silva", revenue: "€8.4k", sessions: 142, rating: 4.9 },
    { name: "Ana Costa", revenue: "€7.2k", sessions: 128, rating: 4.8 },
    { name: "João Ferreira", revenue: "€6.8k", sessions: 115, rating: 5.0 },
    { name: "Sofia Martins", revenue: "€5.9k", sessions: 98, rating: 4.9 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#2C2C2C]">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#0EA5E9]" />
              <span className="text-xl font-bold">TATTOO<span className="text-[#0EA5E9]">SYNC</span> Admin</span>
            </div>

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

      {/* Sidebar */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 bg-[#0A0A0A] border-r border-[#2C2C2C] p-4 hidden lg:block">
        <nav className="space-y-2">
          {[
            { id: "overview", icon: BarChart3, label: t.overview },
            { id: "users", icon: Users, label: t.users },
            { id: "payments", icon: DollarSign, label: t.payments },
            { id: "ai", icon: Sparkles, label: t.ai },
            { id: "content", icon: Globe, label: t.content },
            { id: "moderation", icon: AlertTriangle, label: t.moderation },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? "bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white"
                  : "text-[#8C8C8C] hover:text-white hover:bg-[#1A1A1A]"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-semibold">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 lg:ml-64 max-w-[1920px]">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
          <p className="text-[#8C8C8C]">{new Date().toLocaleDateString('pt-PT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6 hover:border-[#0EA5E9] transition-all"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${kpi.color} rounded-xl flex items-center justify-center mb-4`}>
                <kpi.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-[#8C8C8C] mb-1">{kpi.label}</p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">{kpi.value}</p>
                <span className="text-sm text-[#10B981]">{kpi.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Revenue Chart */}
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#0EA5E9]" />
                Receita Mensal
              </h2>
              <div className="h-64 flex items-end justify-between gap-2">
                {[65, 78, 82, 90, 85, 95, 88, 92, 98, 105, 112, 120].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-gradient-to-t from-[#0EA5E9] to-[#0284C7] rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-[#8C8C8C]">{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Activity className="w-6 h-6 text-[#0EA5E9]" />
                {t.recentActivity}
              </h2>
              <div className="space-y-3">
                {recentActivity.map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-[#0A0A0A] border border-[#2C2C2C] rounded-xl hover:border-[#0EA5E9] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {activity.type === "success" && <CheckCircle className="w-5 h-5 text-[#10B981]" />}
                      {activity.type === "error" && <XCircle className="w-5 h-5 text-red-500" />}
                      {activity.type === "warning" && <AlertTriangle className="w-5 h-5 text-[#D4AF37]" />}
                      {activity.type === "info" && <Eye className="w-5 h-5 text-[#0EA5E9]" />}
                      <div>
                        <p className="font-semibold">{activity.user}</p>
                        <p className="text-sm text-[#8C8C8C]">{activity.action}</p>
                      </div>
                    </div>
                    <span className="text-xs text-[#8C8C8C]">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Top Artists */}
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Crown className="w-6 h-6 text-[#D4AF37]" />
                {t.topArtists}
              </h2>
              <div className="space-y-4">
                {topArtists.map((artist, i) => (
                  <div
                    key={i}
                    className="p-4 bg-[#0A0A0A] border border-[#2C2C2C] rounded-xl hover:border-[#0EA5E9] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-bold">{artist.name}</p>
                      <span className="text-sm text-[#10B981]">{artist.revenue}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-[#8C8C8C]">
                      <span>{artist.sessions} sessões</span>
                      <span className="flex items-center gap-1">
                        ⭐ {artist.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Stats */}
            <div className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#0284C7]/10 border border-[#0EA5E9]/30 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#0EA5E9]" />
                Estatísticas IA
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#8C8C8C]">Previews Gerados</span>
                    <span className="text-sm font-bold">156,842</span>
                  </div>
                  <div className="h-2 bg-[#2C2C2C] rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-to-r from-[#0EA5E9] to-[#0284C7]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#8C8C8C]">Fichas Automáticas</span>
                    <span className="text-sm font-bold">8,421</span>
                  </div>
                  <div className="h-2 bg-[#2C2C2C] rounded-full overflow-hidden">
                    <div className="h-full w-[68%] bg-gradient-to-r from-[#10B981] to-[#059669]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#8C8C8C]">Correção de Fotos</span>
                    <span className="text-sm font-bold">12,156</span>
                  </div>
                  <div className="h-2 bg-[#2C2C2C] rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-gradient-to-r from-[#D4AF37] to-[#B8941F]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6">Ações Rápidas</h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/50 transition-all">
                  Aprovar Tatuador
                </button>
                <button className="w-full px-4 py-3 bg-[#2C2C2C] rounded-lg font-semibold hover:bg-[#3C3C3C] transition-colors">
                  Enviar Notificação
                </button>
                <button className="w-full px-4 py-3 bg-[#2C2C2C] rounded-lg font-semibold hover:bg-[#3C3C3C] transition-colors">
                  Gerar Relatório
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
