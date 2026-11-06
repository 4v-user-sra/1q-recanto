import { ensaiosExperimentos } from '../data';
import { FadeIn } from './FadeIn';
import { FlaskConical, CheckCircle2, TrendingUp, Target, Award } from 'lucide-react';

export function EnsaiosSection() {
  return (
    <section className="py-24 px-8 bg-brand-graphite/5 border-b border-brand-graphite/10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical className="text-brand-coral w-8 h-8" />
            <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">Laboratório de Ideias</span>
          </div>
          <h2 className="text-brand-graphite mb-4 text-4xl md:text-[48px] font-heading font-bold leading-tight">
            O que Testamos & O que Deu Certo
          </h2>
          <p className="text-xl text-brand-graphite/80 max-w-3xl font-medium leading-relaxed mb-14">
            Nos últimos 90 dias, colocamos no ar diferentes formatos de anúncios, ofertas e ideias. Veja os principais testes que se pagaram com folga e trouxeram resultados reais para o Recanto:
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ensaiosExperimentos.map((ensaio, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div className="bg-brand-white p-8 rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-graphite/10 flex flex-col justify-between h-full hover:border-brand-coral/50 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Target className="w-3.5 h-3.5" /> {ensaio.focus}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {ensaio.tag}
                    </span>
                  </div>

                  <h3 className="text-brand-graphite font-bold text-xl mb-3 font-heading">
                    {ensaio.name}
                  </h3>

                  <p className="text-brand-graphite/75 font-medium leading-relaxed text-sm mb-6">
                    {ensaio.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-graphite/10 grid grid-cols-2 gap-4">
                  <div className="bg-brand-graphite/5 p-3.5 rounded-xl">
                    <div className="text-[10px] uppercase font-bold text-brand-graphite/50 tracking-wider mb-1">Resultado do Teste</div>
                    <div className="text-brand-graphite font-heading font-extrabold text-base md:text-lg">{ensaio.result}</div>
                  </div>
                  <div className="bg-brand-coral/5 p-3.5 rounded-xl">
                    <div className="text-[10px] uppercase font-bold text-brand-coral tracking-wider mb-1">Multiplicador (ROAS)</div>
                    <div className="text-brand-coral font-heading font-extrabold text-base md:text-lg">{ensaio.roi}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
