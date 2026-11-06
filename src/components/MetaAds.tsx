import { useState } from 'react';
import { metaMetrics, metaCreatives, metaStrategy, metaMonthlyBreakdown } from '../data';
import { FadeIn } from './FadeIn';
import { BarChart3, Megaphone, Lightbulb, MousePointerClick, X, ZoomIn, Calendar, TrendingUp } from 'lucide-react';

export function MetaAds() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <section className="py-28 px-8 bg-brand-white border-b border-brand-graphite/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="text-brand-coral w-8 h-8" />
            <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">Fechamento Meta Ads</span>
          </div>
          <h2 className="text-brand-graphite mb-6 text-4xl md:text-[54px] font-heading font-bold leading-tight">
            Desempenho Consolidado de Campanha
          </h2>
          <p className="text-xl text-brand-graphite/80 max-w-3xl font-medium leading-relaxed mb-6">
            Análise acumulada dos 3 meses de veiculação (Agosto a Outubro de 2026). A estratégia validou criativos diretos de conversão e ofertas de primeira compra com retorno exponencial.
          </p>
          <div className="inline-flex items-center gap-2 bg-brand-coral/10 text-brand-coral font-bold px-4 py-2 rounded-lg mb-16 text-sm uppercase tracking-wider">
            <Calendar className="w-4 h-4" /> Período analisado: 01 de Agosto de 2026 até 31 de Outubro de 2026
          </div>
        </FadeIn>

        {/* Top Metrics Cards (5 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {metaMetrics.map((metric, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-brand-graphite/5 border border-brand-graphite/10 p-6 rounded-[12px] h-full flex flex-col justify-center border-b-4 border-b-brand-coral">
                <div className="text-brand-coral font-heading font-bold text-3xl mb-1">{metric.value}</div>
                <div className="text-brand-graphite font-bold text-base mb-1">{metric.label}</div>
                <div className="text-brand-graphite/60 font-medium text-xs">{metric.subtitle}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Monthly Evolutionary Progression */}
        <div className="mb-20">
          <FadeIn delay={0.2} className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-graphite/10">
            <TrendingUp className="text-brand-coral w-6 h-6" />
            <h3 className="text-brand-graphite text-2xl font-bold font-heading">Evolução Mensal no Tráfego</h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metaMonthlyBreakdown.map((item, idx) => (
              <FadeIn key={idx} delay={0.3 + (idx * 0.1)}>
                <div className="bg-brand-white border border-brand-graphite/10 p-6 rounded-[14px] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-heading font-bold text-lg text-brand-graphite">{item.month}</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                      ROAS {item.roas}x
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-brand-graphite/60 font-medium">Investimento:</span>
                      <span className="font-bold text-brand-graphite">R$ {item.gasto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-brand-graphite/60 font-medium">Compras:</span>
                      <span className="font-bold text-brand-graphite">{item.compras} vendas</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-brand-graphite/60 font-medium">Faturamento:</span>
                      <span className="font-bold text-green-600">R$ {item.receita.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-brand-graphite/60 font-medium">Ticket Médio:</span>
                      <span className="font-bold text-brand-graphite">R$ {(item.receita / item.compras).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Creatives Row */}
        <div className="mb-20">
          <FadeIn delay={0.2} className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-graphite/10">
            <Megaphone className="text-brand-coral w-6 h-6" />
            <h3 className="text-brand-graphite text-2xl font-bold font-heading">Criativos de Destaque</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metaCreatives.map((creative, idx) => (
              <FadeIn key={idx} delay={0.3 + (idx * 0.1)} className="bg-brand-white rounded-[12px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-graphite/5 flex flex-col group">
                <div 
                  className="relative h-64 overflow-hidden bg-brand-graphite/5 cursor-pointer group/img"
                  onClick={() => setExpandedImage(creative.image)}
                >
                  <div className="absolute inset-0 bg-brand-graphite/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                    <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
                  </div>
                  <img 
                    src={creative.image} 
                    alt={creative.title} 
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-coral text-brand-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-30 shadow-md">
                    {creative.title}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-brand-graphite/50 font-bold mb-1">Compras</div>
                        <div className="font-heading font-bold text-xl text-brand-graphite">{creative.purchases}</div>
                      </div>
                      {creative.ctr && (
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-brand-graphite/50 font-bold mb-1">CTR</div>
                          <div className="font-heading font-bold text-xl text-brand-graphite flex items-center gap-1">
                             <MousePointerClick className="w-4 h-4 text-brand-coral" /> {creative.ctr}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="bg-brand-graphite/5 rounded-lg p-3 flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-brand-graphite/70 uppercase">Faturamento</span>
                      <span className="font-bold text-green-600 text-lg">{creative.revenue}</span>
                    </div>
                    <div className="bg-brand-graphite/5 rounded-lg p-3 flex justify-between items-center">
                      <span className="text-xs font-bold text-brand-graphite/70 uppercase">ROAS</span>
                      <span className="font-bold text-brand-coral text-lg">{creative.roas}x</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Strategic Reading Row */}
        <div>
          <FadeIn delay={0.4} className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-graphite/10">
            <Lightbulb className="text-brand-coral w-6 h-6" />
            <h3 className="text-brand-graphite text-2xl font-bold font-heading">Padrões Estratégicos</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metaStrategy.map((strat, idx) => (
              <FadeIn key={idx} delay={0.5 + (idx * 0.1)} className="bg-brand-graphite/5 p-6 rounded-[12px] border-l-4 border-brand-coral">
                <h4 className="text-brand-graphite font-bold text-lg mb-3">{strat.title}</h4>
                <p className="text-brand-graphite/80 font-medium leading-relaxed text-sm">
                  {strat.description}
                </p>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.8} className="mt-12 bg-brand-graphite p-8 md:p-10 rounded-[12px] text-brand-white">
            <div className="text-brand-coral font-bold tracking-widest uppercase text-xs mb-3">Conclusão Primária do Período</div>
            <p className="font-medium leading-relaxed opacity-90 text-xl">
              Consolidamos a pizzaria como referência de tráfego direto em Jundiaí com R$ 144,3k faturados e ROAS geral de 18,03x. O custo por clique sustentável (CPC R$ 0,44) abre caminho para escalar verba com segurança previsível.
            </p>
          </FadeIn>
        </div>

      </div>

      {expandedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setExpandedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-brand-coral transition-colors"
            onClick={() => setExpandedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img 
            src={expandedImage} 
            alt="Criativo Expandido" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()} 
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
}
