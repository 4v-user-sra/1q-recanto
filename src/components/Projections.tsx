import { revenueProjectionsData } from '../data';
import { FadeIn } from './FadeIn';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, ComposedChart } from 'recharts';
import { TrendingUp, DollarSign, Target, Sparkles, Trophy } from 'lucide-react';

export function Projections() {
  return (
    <section className="py-32 px-8 bg-brand-coral relative overflow-hidden text-brand-white">
      {/* Background Decorative Shapes */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-brand-dark rounded-bl-[120px] mix-blend-multiply opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brand-accent rounded-tr-[120px] mix-blend-multiply opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="flex items-center gap-2 text-yellow-300 font-bold tracking-widest uppercase text-sm mb-3">
            <Sparkles className="w-5 h-5" />
            <span>Escala & Previsibilidade</span>
          </div>
          <h2 className="text-brand-white mb-6 text-4xl md:text-[54px] font-heading font-bold leading-tight">
            Projeções Esperadas de Faturamento
          </h2>
          <p className="text-xl text-brand-white/90 max-w-3xl font-medium leading-relaxed mb-10">
            Considerando a consolidação dos indicadores do projeto nos últimos 90 dias (ROAS médio de 18,03x a 35,1x e custo por venda de ~R$ 5,04), desenhamos a esteira de crescimento de faturamento esperada para as próximas etapas:
          </p>
        </FadeIn>

        {/* Victory Callout Card */}
        <FadeIn delay={0.2} className="mb-12 bg-brand-white/10 backdrop-blur-md border border-brand-white/20 p-6 md:p-8 rounded-[16px]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-400 text-brand-graphite font-bold flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6 text-brand-graphite" />
            </div>
            <div>
              <h4 className="font-bold text-xl text-brand-white mb-2 font-heading">
                Vitória Consolidada & Base de Modelagem
              </h4>
              <p className="text-brand-white/90 font-medium text-base leading-relaxed">
                Foi uma vitória muito positiva para o projeto termos esses indicadores consolidados no trimestre. A validação do modelo nos concede segurança total para ampliar o investimento em tráfego de R$ 3.000,00/mês para até R$ 6.000,00/mês.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Projections Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {revenueProjectionsData.map((proj, idx) => (
            <FadeIn key={idx} delay={0.3 + (idx * 0.1)}>
              <div className="bg-brand-white text-brand-graphite p-6 rounded-[14px] shadow-xl border border-brand-white/20 h-full flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase font-bold text-brand-coral tracking-wider mb-2">
                    {proj.name}
                  </div>
                  <div className="text-2xl font-extrabold font-heading text-brand-graphite mb-1">
                    R$ {proj.investimento.toLocaleString('pt-BR')}/mês
                  </div>
                  <div className="text-xs text-brand-graphite/60 font-medium mb-4">
                    Investimento em Tráfego
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-graphite/10">
                  <div className="text-[11px] uppercase font-bold text-brand-graphite/50 mb-1">Faturamento Projetado</div>
                  <div className="text-2xl font-bold font-heading text-green-600 mb-2">
                    R$ {proj.faturamentoEsperado.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-xs font-semibold text-brand-coral bg-brand-coral/10 py-1 px-2.5 rounded-full inline-block">
                    ~{proj.comprasEstimadas} vendas/mês
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Interactive Chart */}
        <FadeIn delay={0.5} className="bg-brand-white rounded-[16px] p-8 md:p-12 shadow-2xl text-brand-graphite">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-brand-graphite/10">
            <div>
              <h3 className="font-heading font-bold text-2xl text-brand-graphite">
                Crescimento Comparativo: Investimento vs. Faturamento Esperado
              </h3>
              <p className="text-brand-graphite/60 text-sm font-medium">
                Simulação baseada no ROAS médio consolidado de 18,03x obtido no período.
              </p>
            </div>
            <div className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full">
              <TrendingUp className="w-4 h-4" /> ROAS Médio Projetado: 18,03x
            </div>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={revenueProjectionsData}
                margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B2520', fontWeight: 'bold'}} dy={15} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#232323'}} tickFormatter={(v) => `R$ ${(v/1000).toFixed(0)}k`} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#EC3237'}} tickFormatter={(v) => `R$ ${(v/1000).toFixed(1)}k`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.15)', padding: '16px' }}
                  itemStyle={{ fontWeight: 'bold' }}
                  formatter={(value: any, name: string) => [
                    `R$ ${Number(value).toLocaleString('pt-BR')}`, 
                    name === 'faturamentoEsperado' ? 'Faturamento Projetado' : 'Investimento em Ads'
                  ]}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '30px' }} />
                <Bar yAxisId="right" dataKey="investimento" name="Investimento em Ads" fill="#EC3237" radius={[6, 6, 0, 0]} barSize={40} />
                <Line yAxisId="left" type="monotone" dataKey="faturamentoEsperado" name="Faturamento Projetado" stroke="#22C55E" strokeWidth={4} dot={{r: 8, strokeWidth: 3, fill: '#22C55E'}} activeDot={{r: 10}} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-8 text-center text-brand-graphite/60 text-sm font-medium border-t border-brand-graphite/10 pt-4">
            * O faturamento projetado mantém como premissa a estabilidade das ofertas validadas (AD 02 e Vídeos do Cardápio) e CPA direto de R$ 5,04/compra.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
