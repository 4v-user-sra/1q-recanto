import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { Instagram, Facebook, Target, CheckCircle2, ArrowRight, Eye, Users, MousePointerClick, HeartHandshake, Sparkles, Calendar, TrendingUp } from 'lucide-react';

export function SocialMediaPerformance() {
  const instagramData = [
    { month: '08/26', views: '82.374', visits: '3,8 mil', bioClicks: '34', followers: '340', interactions: '2,4 mil' },
    { month: '09/26', views: '53.954', visits: '3,5 mil', bioClicks: '270', followers: '318', interactions: '1,1 mil' },
    { month: '10/26', views: '52.048', visits: '5,1 mil', bioClicks: '629', followers: '361', interactions: '1,2 mil' },
  ];

  const facebookData = [
    { month: '08/26', views: '10.308', followers: '24', interactions: '521' },
    { month: '09/26', views: '5.876', followers: '39', interactions: '648' },
    { month: '10/26', views: '5.762', followers: '30', interactions: '535' },
  ];

  const actionsDone = [
    "Análise comparativa de performance (alcance, engajamento, seguidores e eficiência por formato)",
    "Ajuste contínuo da linha editorial com foco em autoridade técnica e desejo",
    "Reforço da narrativa de posicionamento estratégico da marca no mercado local",
    "Monitoramento quinzenal de dados para ajuste de formatos e temas com base em performance real",
    "Execução completa dos calendários de conteúdo de Agosto, Setembro e Outubro",
    "Validação de estratégias focadas em atrair grupos para os rodízios em dias de semana"
  ];

  const nextSteps = [
    "Manter frequência média de 12 posts/mês com alta relevância estratégica",
    "Manter frequência de conteúdos criativos e educacionais sobre as pizzas",
    "Manter meta de crescimento mínimo de +70 seguidores qualificados/mês",
    "Desenvolver conteúdos com dinâmicas visuais mais 'Criativas' e virais",
    "Otimizar constantemente a biografia e destaques do Instagram",
    "Acompanhar campanhas orgânicas direcionadas a impulsionar movimento no salão de terça a quinta",
    "Desenvolver calendário de conteúdos de Novembro e cronograma especial de Dezembro"
  ];

  return (
    <section className="py-28 px-8 bg-brand-white border-b border-brand-graphite/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <Instagram className="text-brand-coral w-8 h-8" />
            <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">Desempenho Orgânico & Redes Sociais</span>
          </div>
          <h2 className="text-brand-graphite mb-4 text-4xl md:text-[48px] font-heading font-bold leading-tight">
            Consolidação do Período (Instagram & Facebook)
          </h2>
          <p className="text-xl text-brand-graphite/80 max-w-3xl font-medium leading-relaxed mb-16">
            Relatório acumulado dos últimos 90 dias de atuação orgânica, com acompanhamento de crescimento, audiência e engajamento da marca Recanto da Pizza.
          </p>
        </FadeIn>

        {/* Total Followers Highlight Card */}
        <FadeIn delay={0.1} className="mb-12 bg-brand-coral text-brand-white p-8 rounded-[16px] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-dark/20 rounded-bl-full pointer-events-none"></div>
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-white/20 flex items-center justify-center shrink-0">
              <Instagram className="w-8 h-8 text-brand-white" />
            </div>
            <div>
              <span className="text-brand-white/80 text-xs font-bold uppercase tracking-wider block mb-1">Base de Fãs no Instagram</span>
              <h3 className="font-heading font-bold text-3xl md:text-4xl text-brand-white">11.900 Seguidores Totais</h3>
            </div>
          </div>
          <div className="relative z-10 bg-brand-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-brand-white/20 text-center">
            <span className="text-xs uppercase tracking-wider font-bold text-brand-white/80">Novos Seguidores no Trimestre</span>
            <div className="text-2xl font-extrabold text-yellow-300 font-heading">+1.019 Seguidores</div>
          </div>
        </FadeIn>

        {/* Instagram Table & Metrics */}
        <FadeIn delay={0.2} className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-heading font-bold text-brand-graphite flex items-center gap-2">
              <Instagram className="text-brand-coral w-6 h-6" /> Desempenho Instagram (08/26 a 10/26)
            </h3>
          </div>

          <div className="bg-brand-white rounded-[16px] border border-brand-graphite/10 overflow-hidden shadow-md mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-graphite/5 border-b border-brand-graphite/10 text-brand-graphite uppercase font-bold text-xs tracking-wider">
                    <th className="py-4 px-6">Mês</th>
                    <th className="py-4 px-6 text-center">Visualizações</th>
                    <th className="py-4 px-6 text-center">Visitas ao Perfil</th>
                    <th className="py-4 px-6 text-center">Cliques no Link Bio</th>
                    <th className="py-4 px-6 text-center">Novos Seguidores</th>
                    <th className="py-4 px-6 text-center">Interações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-graphite/10 text-sm">
                  {instagramData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-brand-graphite/[0.02] transition-colors">
                      <td className="py-4 px-6 font-bold text-brand-graphite">{row.month}</td>
                      <td className="py-4 px-6 text-center font-semibold text-brand-graphite">{row.views}</td>
                      <td className="py-4 px-6 text-center font-semibold text-brand-graphite">{row.visits}</td>
                      <td className="py-4 px-6 text-center font-semibold text-brand-coral">{row.bioClicks}</td>
                      <td className="py-4 px-6 text-center font-semibold text-green-600">+{row.followers}</td>
                      <td className="py-4 px-6 text-center font-bold text-brand-graphite">{row.interactions}</td>
                    </tr>
                  ))}
                  <tr className="bg-brand-coral/5 font-extrabold text-brand-graphite border-t-2 border-brand-coral/30">
                    <td className="py-4 px-6 text-brand-coral uppercase text-xs font-bold">TOTAL TRIMESTRE</td>
                    <td className="py-4 px-6 text-center text-lg">188.376</td>
                    <td className="py-4 px-6 text-center text-lg">12.400</td>
                    <td className="py-4 px-6 text-center text-lg text-brand-coral">933</td>
                    <td className="py-4 px-6 text-center text-lg text-green-600">+1.019</td>
                    <td className="py-4 px-6 text-center text-lg">4.700</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Facebook Metrics Table */}
        <FadeIn delay={0.3} className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-heading font-bold text-brand-graphite flex items-center gap-2">
              <Facebook className="text-blue-600 w-6 h-6" /> Desempenho Facebook (08/26 a 10/26)
            </h3>
          </div>

          <div className="bg-brand-white rounded-[16px] border border-brand-graphite/10 overflow-hidden shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-graphite/5 border-b border-brand-graphite/10 text-brand-graphite uppercase font-bold text-xs tracking-wider">
                    <th className="py-4 px-6">Mês</th>
                    <th className="py-4 px-6 text-center">Visualizações</th>
                    <th className="py-4 px-6 text-center">Novos Seguidores</th>
                    <th className="py-4 px-6 text-center">Interações Totais</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-graphite/10 text-sm">
                  {facebookData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-brand-graphite/[0.02] transition-colors">
                      <td className="py-4 px-6 font-bold text-brand-graphite">{row.month}</td>
                      <td className="py-4 px-6 text-center font-semibold text-brand-graphite">{row.views}</td>
                      <td className="py-4 px-6 text-center font-semibold text-green-600">+{row.followers}</td>
                      <td className="py-4 px-6 text-center font-bold text-brand-graphite">{row.interactions}</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 font-extrabold text-brand-graphite border-t-2 border-blue-200">
                    <td className="py-4 px-6 text-blue-700 uppercase text-xs font-bold">TOTAL TRIMESTRE</td>
                    <td className="py-4 px-6 text-center text-lg">21.946</td>
                    <td className="py-4 px-6 text-center text-lg text-green-600">+93</td>
                    <td className="py-4 px-6 text-center text-lg">1.704</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Objectives & Key Results (KRs) */}
        <FadeIn delay={0.4} className="mb-20">
          <div className="bg-brand-graphite/5 border border-brand-graphite/10 p-8 md:p-10 rounded-[16px]">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-brand-coral w-7 h-7" />
              <h3 className="font-heading font-bold text-2xl text-brand-graphite">
                Objetivo do Orgânico & Resultados Chave (KRs)
              </h3>
            </div>
            <p className="text-brand-graphite/80 text-base font-medium mb-8">
              <strong>Objetivo Principal:</strong> Posicionar a marca do Recanto da Pizza de forma orgânica como referência no segmento em Jundiaí e região.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-white p-6 rounded-xl border border-brand-graphite/10 border-l-4 border-l-brand-coral shadow-sm">
                <span className="text-xs uppercase font-bold text-brand-coral tracking-wider mb-2 block">KR 1 — Base de Seguidores</span>
                <h4 className="font-heading font-bold text-xl text-brand-graphite mb-2">Meta de 12.300 Seguidores</h4>
                <p className="text-brand-graphite/70 text-sm font-medium">
                  Crescer a base de seguidores no Instagram para 12.300 até Dezembro de 2026 com público local qualificado.
                </p>
              </div>

              <div className="bg-brand-white p-6 rounded-xl border border-brand-graphite/10 border-l-4 border-l-green-500 shadow-sm">
                <span className="text-xs uppercase font-bold text-green-600 tracking-wider mb-2 block">KR 2 — Engajamento & Interação</span>
                <h4 className="font-heading font-bold text-xl text-brand-graphite mb-2">+10% em Interações</h4>
                <p className="text-brand-graphite/70 text-sm font-medium">
                  Elevar o volume total de curtidas, comentários, salvamentos e compartilhamentos em 10% comparado ao trimestre anterior.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Actions Done & Next Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Actions Done */}
          <FadeIn delay={0.5} className="bg-brand-white p-8 rounded-[16px] border border-brand-graphite/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-graphite/10">
                <CheckCircle2 className="text-green-600 w-6 h-6" />
                <h3 className="font-heading font-bold text-2xl text-brand-graphite">O Que Foi Feito</h3>
              </div>
              
              <ul className="space-y-4">
                {actionsDone.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-coral mt-2 shrink-0"></div>
                    <span className="text-brand-graphite/85 font-medium text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Next Steps */}
          <FadeIn delay={0.6} className="bg-brand-graphite text-brand-white p-8 rounded-[16px] border border-brand-white/10 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-white/10">
                <ArrowRight className="text-brand-coral w-6 h-6" />
                <h3 className="font-heading font-bold text-2xl text-brand-white">Próximos Passos (Orgânico)</h3>
              </div>

              <ul className="space-y-4">
                {nextSteps.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-coral mt-2 shrink-0"></div>
                    <span className="text-brand-white/90 font-medium text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
