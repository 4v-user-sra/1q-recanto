import { useState } from 'react';
import { projectGoalsAndKPIs, projectAssumptionsAndRisks, projectDeliverables } from '../data';
import { FadeIn } from './FadeIn';
import { Target, AlertTriangle, CheckCircle2, Clock, Calendar, ShieldCheck, Filter, ArrowRight } from 'lucide-react';

export function StrategicRoadmap() {
  const [selectedStatus, setSelectedStatus] = useState<string>('Todos');

  const filteredDeliverables = selectedStatus === 'Todos'
    ? projectDeliverables
    : projectDeliverables.filter(item => item.status === selectedStatus);

  const statusCounts = {
    Todos: projectDeliverables.length,
    Entregue: projectDeliverables.filter(i => i.status === 'Entregue').length,
    Pendente: projectDeliverables.filter(i => i.status === 'Pendente').length,
    'Em andamento': projectDeliverables.filter(i => i.status === 'Em andamento').length,
    'Próxima Etapa': projectDeliverables.filter(i => i.status === 'Próxima Etapa').length,
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Entregue':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Pendente':
        return 'bg-amber-100 text-amber-900 border-amber-300 font-bold';
      case 'Em andamento':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Próxima Etapa':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="bg-brand-white border-b border-brand-graphite/5">
      {/* ------------------------------------------------------------- */}
      {/* SEÇÃO 1: Objetivo do Projeto com 3 KPIs de Acompanhamento     */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 px-8 border-b border-brand-graphite/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-brand-coral w-8 h-8" />
              <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">Alinhamento Estratégico</span>
            </div>
            <h2 className="text-brand-graphite mb-4 text-4xl md:text-[48px] font-heading font-bold leading-tight">
              1. Objetivo do Projeto & KPIs Chave
            </h2>
            <p className="text-xl text-brand-graphite/80 max-w-3xl font-medium leading-relaxed mb-12">
              {projectGoalsAndKPIs.scenarioDescription}
            </p>
          </FadeIn>

          {/* 3 KPIs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectGoalsAndKPIs.kpis.map((kpi, idx) => (
              <FadeIn key={idx} delay={0.3 + (idx * 0.1)}>
                <div className="bg-brand-graphite/5 border border-brand-graphite/10 p-8 rounded-[16px] h-full flex flex-col justify-between border-t-4 border-t-brand-coral hover:shadow-md transition-shadow">
                  <div>
                    <div className="text-xs uppercase font-bold tracking-widest text-brand-coral mb-2">
                      KPI #{idx + 1}
                    </div>
                    <h4 className="font-heading font-bold text-xl text-brand-graphite mb-2">
                      {kpi.title}
                    </h4>
                    <div className="text-3xl font-extrabold font-heading text-brand-graphite mb-4">
                      {kpi.target}
                    </div>
                    <p className="text-brand-graphite/70 text-sm font-medium leading-relaxed">
                      {kpi.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SEÇÃO 2: Premissas e Riscos do Projeto                        */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 px-8 bg-brand-graphite/5 border-b border-brand-graphite/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-brand-coral w-8 h-8" />
              <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">Governança & Execução</span>
            </div>
            <h2 className="text-brand-graphite mb-4 text-4xl md:text-[48px] font-heading font-bold leading-tight">
              2. Premissas Operacionais & Gestão de Riscos
            </h2>
            <p className="text-xl text-brand-graphite/80 max-w-3xl font-medium leading-relaxed mb-12">
              Para sustentar a aceleração de vendas do projeto, assumimos três premissas operacionais essenciais e seus respectivos planos de mitigação:
            </p>
          </FadeIn>

          {/* Premissas 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projectAssumptionsAndRisks.assumptions.map((assum, idx) => (
              <FadeIn key={idx} delay={0.2 + (idx * 0.1)}>
                <div className="bg-brand-white p-8 rounded-[16px] shadow-sm border border-brand-graphite/10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-coral/10 text-brand-coral flex items-center justify-center font-bold mb-4 text-lg">
                      {idx + 1}
                    </div>
                    <h4 className="font-heading font-bold text-lg text-brand-graphite mb-3">
                      {assum.title}
                    </h4>
                    <p className="text-brand-graphite/75 text-sm font-medium leading-relaxed">
                      {assum.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Riscos & Mitigações Box */}
          <FadeIn delay={0.5} className="bg-brand-graphite text-brand-white p-8 md:p-10 rounded-[16px] border border-brand-white/10">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-yellow-400 w-7 h-7" />
              <h3 className="font-heading font-bold text-2xl text-brand-white">
                Gestão de Riscos & Protocolos de Contenção
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectAssumptionsAndRisks.risks.map((item, idx) => (
                <div key={idx} className="bg-brand-white/10 p-6 rounded-xl border border-brand-white/10">
                  <div className="text-xs uppercase font-bold text-yellow-400 mb-2">Risco Mapeado</div>
                  <h4 className="font-bold text-lg text-brand-white mb-2">{item.risk}</h4>
                  <div className="text-xs uppercase font-bold text-brand-coral mb-1">Mitigação Ativa</div>
                  <p className="text-brand-white/80 text-sm font-medium">{item.mitigation}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SEÇÃO 3: Tabela de Entregas e Próximas Etapas                 */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-brand-coral w-8 h-8" />
              <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">Roadmap Operacional</span>
            </div>
            <h2 className="text-brand-graphite mb-4 text-4xl md:text-[48px] font-heading font-bold leading-tight">
              3. Tabela de Entregas & Próximas Etapas
            </h2>
            <p className="text-xl text-brand-graphite/80 max-w-3xl font-medium leading-relaxed mb-8">
              Acompanhamento de tarefas consolidadas, pendências prioritárias e próximas entregas do projeto Recanto da Pizza:
            </p>
          </FadeIn>

          {/* Deliverables Table */}
          <FadeIn delay={0.3} className="bg-brand-white rounded-[16px] border border-brand-graphite/10 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-graphite/5 border-b border-brand-graphite/10 text-brand-graphite uppercase font-bold text-xs tracking-wider">
                    <th className="py-4 px-6">Tarefa / Ação</th>
                    <th className="py-4 px-6">Responsáveis</th>
                    <th className="py-4 px-6 text-center">Prazo</th>
                    <th className="py-4 px-6 text-center">Status</th>
                    <th className="py-4 px-6">Observações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-graphite/10 text-sm">
                  {projectDeliverables.map((row, idx) => (
                    <tr key={idx} className="hover:bg-brand-graphite/[0.02] transition-colors">
                      <td className="py-4 px-6 font-bold text-brand-graphite max-w-xs">
                        {row.task}
                      </td>
                      <td className="py-4 px-6 font-medium text-brand-graphite/80 text-xs">
                        {row.responsible}
                      </td>
                      <td className="py-4 px-6 font-semibold text-center text-xs whitespace-nowrap text-brand-graphite">
                        {row.deadline}
                      </td>
                      <td className="py-4 px-6 text-center whitespace-nowrap">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs border ${getStatusBadge(row.status)}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-brand-graphite/70 text-xs font-medium leading-relaxed max-w-md">
                        {row.observation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
