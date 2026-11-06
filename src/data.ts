// Dados Consolidados do Período: 01 de Agosto de 2026 a 31 de Outubro de 2026

export const periodVictoryInfo = {
  title: "Fechamento do Período — Agosto a Outubro de 2026",
  badge: "Consolidação de Resultados",
  heroSubtitle: "Consolidação trimestral de Tráfego Pago, Auditoria de Meta Ads, Ensaios de Criativos, CRM e Projeções de Escala.",
  victoryMessage: "Foi uma vitória muito positiva para o projeto termos esses indicadores consolidados! Em 3 meses de atuação, investimos R$ 8.007,55 em tráfego para gerar R$ 144.382,40 em faturamento direto reportado (ROAS Geral de 18,03x e ROAS Vendas Diretas de 35,10x), registrando 1.587 compras e provando tração escalável e previsível."
};

export const metaMetrics = [
  { label: "Investimento Total", value: "R$ 8.007,55", subtitle: "Agosto a Outubro/2026" },
  { label: "Impressões Totais", value: "1.257.285", subtitle: "Alcance único: 143.087" },
  { label: "Cliques no Link", value: "18.188", subtitle: "CTR Médio de 1,45%" },
  { label: "Compras Reportadas", value: "1.587", subtitle: "Custo médio: R$ 5,04/compra" },
  { label: "Faturamento Realizado", value: "R$ 144.382,40", subtitle: "ROAS Geral: 18,03x (Vendas: 35,1x)" }
];

export const metaMonthlyBreakdown = [
  { 
    month: "Agosto / 2026", 
    gasto: 1469.69, 
    compras: 438, 
    receita: 37951.50, 
    roas: 25.82, 
    cliques: 3962,
    impressoes: 275916,
    highlight: "Início do ciclo e rápida validação do AD 02 (ROAS 27,8x)" 
  },
  { 
    month: "Setembro / 2026", 
    gasto: 3035.25, 
    compras: 560, 
    receita: 51338.60, 
    roas: 16.91, 
    cliques: 6697,
    impressoes: 429066,
    highlight: "Expansão de orçamento e testes de Vídeo Cardápio (ROAS 33,2x)" 
  },
  { 
    month: "Outubro / 2026", 
    gasto: 3502.61, 
    compras: 589, 
    receita: 55092.30, 
    roas: 15.73, 
    cliques: 7529,
    impressoes: 552303,
    highlight: "Recorde de faturamento mensal e eficiência histórica do Vendas 31/07 (ROAS 36,0x)" 
  }
];

export const metaCreatives = [
  {
    title: "ad 02",
    image: "https://i.imgur.com/k9KlQyw.png",
    purchases: "679 compras",
    revenue: "R$ 59.856,05",
    roas: "29,06",
    ctr: "1,75%"
  },
  {
    title: "ADS VD | CARDÁPIO",
    image: "https://i.imgur.com/Z3DX92Z.png",
    purchases: "286 compras",
    revenue: "R$ 27.075,75",
    roas: "33,22",
    ctr: "0,63%"
  },
  {
    title: "ad 01",
    image: "https://i.imgur.com/0yoE6Ec.png",
    purchases: "211 compras",
    revenue: "R$ 19.493,70",
    roas: "37,16",
    ctr: "2,08%"
  }
];

export const ensaiosExperimentos = [
  {
    name: "Teste 1: Vídeos de Conversão Direta com Foco no Produto",
    focus: "Vendas Diretas",
    result: "R$ 90.128,75 faturados",
    roi: "ROAS 21,0x",
    description: "Apostamos em vídeos curtos com foco total no produto, destacando os detalhes e a qualidade das pizzas. A aderência foi excelente, alcançando um CTR médio de 1,86% (com picos de 1,75% a 2,63%), demonstrando alta atratividade e clique.",
    tag: "Aprovado / Escalar"
  },
  {
    name: "Teste 2: Cupons de Boas-Vindas para Novos Clientes",
    focus: "Atração de Clientes",
    result: "R$ 11.160,00 faturados",
    roi: "ROAS 27,34x",
    description: "Anúncios focados em dar um primeiro incentivo com cupom de desconto. A estratégia funcionou muito bem para vencer a dúvida inicial e trazer quem nunca tinha pedido no Recanto.",
    tag: "Aprovado / Manter"
  },
  {
    name: "Teste 3: Ações de Interação e Presença na Cidade",
    focus: "Presença em Jundiaí",
    result: "821 visitas ao perfil",
    roi: "CPC R$ 0,40",
    description: "Ideias leves e criativas como o 'Desafio Sobrenome Silva' e o 'Outubro Rosa'. Movimentaram o perfil, geraram comentários entre o público local e atraíram novos seguidores a um custo baixíssimo.",
    tag: "Validação Positiva"
  },
  {
    name: "Teste 4: Vídeos de Dar Água na Boca e Ofertas de Meio de Semana",
    focus: "Desejo & Meio de Semana",
    result: "R$ 7.164,30 faturados",
    roi: "ROAS 22,3x",
    description: "Vídeos curtos mostrando o queijo derretendo e o forno a lenha, além de combos de terça a quinta. Tiveram excelente resposta para movimentar os dias de menor movimento.",
    tag: "Otimizado"
  }
];

export const metaStrategy = [
  {
    title: "Domínio Geográfico (Raio 2km)",
    description: "Conjuntos focados em raio curto (2km em Jundiaí) provaram máxima densidade e menor CPC. A retenção local é a força motriz do projeto."
  },
  {
    title: "A Oferta como Âncora de Margem",
    description: "Anúncios com incentivo de 1ª compra atrelados ao cardápio lideram a lucratividade, com ROAS acima de 30x nas campanhas diretas."
  },
  {
    title: "Filtro de Topo de Funil",
    description: "Campanhas amplas geram tráfego qualificado (12.200 landing page views). A verba é otimizada redirecionando o público engajado para a conversão."
  }
];

export const revenueProjectionsData = [
  {
    name: "Cenário 1 (R$ 3.000)",
    investimento: 3000,
    faturamentoEsperado: 54090,
    comprasEstimadas: 595
  },
  {
    name: "Cenário 2 (R$ 4.500)",
    investimento: 4500,
    faturamentoEsperado: 81135,
    comprasEstimadas: 893
  },
  {
    name: "Cenário 3 (R$ 6.000)",
    investimento: 6000,
    faturamentoEsperado: 108180,
    comprasEstimadas: 1190
  }
];

export const crmMetrics = [
  { label: "Base Total Anota Aí", value: "1.224", subtitle: "Leads Potenciais" },
  { label: "Disparo Inicial", value: "500", subtitle: "Leads Selecionados" },
  { label: "Custo de Envio", value: "R$ 0,35", subtitle: "Por mensagem (WhatsApp API)" }
];

export const crmProjectionData = [
  { step: "100 Leads", custo: 35, receita: 1347 },
  { step: "200 Leads", custo: 70, receita: 2694 },
  { step: "300 Leads", custo: 105, receita: 4041 },
  { step: "400 Leads", custo: 140, receita: 5388 },
  { step: "500 Leads", custo: 175, receita: 6723 },
  { step: "Base Total (1.224)", custo: 428, receita: 16443 }
];

export const saloonOffers = [
  {
    title: "Combo Noite Especial",
    description: "Rodízio para casal com valor fixo promocional (R$ 85 os dois) + 2 sodas italianas por nossa conta.",
    rule: "Válido Terça a Quinta"
  },
  {
    title: "Primeira Bebida Grátis",
    description: "Apresente o cupom 'QUERO REFRI' ao garçom e ganhe o 1º refrigerante no rodízio.",
    rule: "Válido Terça a Quinta"
  }
];

export const deliveryOffers = [
  {
    title: "Recuperação 30+ Dias",
    description: "\"Vimos que você não compra com a gente há mais de 30 dias...\" + Cupom VOLTEI10.",
    rule: "Qualquer dia da semana"
  }
];

export const nextStepsTimeline = [
  { time: "Mês 1 (Atual)", action: "Consolidação de R$ 8.007 em Tráfego com R$ 144,3k faturados" },
  { time: "Próximos 15 dias", action: "Iniciar automação do disparo via WhatsApp API" }
];

// NOVAS SEÇÕES: Objetivos & KPIs, Premissas & Riscos e Tabela de Entregas

export const projectGoalsAndKPIs = {
  scenarioTitle: "Cenário de Escala",
  scenarioDescription: "Com base na validação dos últimos 90 dias, os principais indicadores estratégicos que acompanharão as próximas etapas de investimento e expansão do Recanto da Pizza são:",
  kpis: [
    {
      title: "ROAS Mínimo Direto",
      target: "15,0x a 20,0x",
      description: "Garantia de que a cada R$ 1,00 investido em anúncios de conversão retorne ao menos R$ 15,00 a R$ 20,00 em faturamento de pedidos."
    },
    {
      title: "CPA / Custo por Compra",
      target: "Até R$ 5,50",
      description: "Teto de custo por aquisição direta (atualmente R$ 5,04), assegurando margem saudável nas vendas do delivery e rodízio."
    },
    {
      title: "Volume Mensal de Compras",
      target: "1.200 a 1.300 pedidos",
      description: "Meta de conversões ativas por mês via campanhas de Meta Ads e ativação local do Google Search."
    }
  ]
};

export const projectAssumptionsAndRisks = {
  assumptions: [
    {
      title: "Aprovação Agilizada (Até 48h)",
      description: "Fluxo rápido de validação de peças e ofertas entre a V4 Company e a equipe do Recanto da Pizza para evitar pausas no aprendizado das campanhas."
    },
    {
      title: "Verba de Mídia Contínua",
      description: "Disponibilização ininterrupta do orçamento de mídia (PIX / cartão) para manter o leilão ativo nos melhores horários de quinta a domingo."
    },
    {
      title: "Mapeamento & Controle de Margens",
      description: "Acompanhamento detalhado das margens e CMV dos produtos e combos para assegurar lucro saudável em cada venda e validar promoções sem comprometer o caixa."
    }
  ],
  risks: [
    {
      risk: "Fadiga Visual de Criativo",
      mitigation: "Apresentar constantemente variações dos anúncios campeões (AD 02 e Vídeos do Cardápio) com ângulos e copys atualizadas."
    },
    {
      risk: "Descalibração de Margem/CMV",
      mitigation: "Análise contínua da planilha de custos antes do lançamento dos novos combos e ofertas da Black Friday."
    }
  ]
};

export const projectDeliverables = [
  {
    task: "Aprovação da Verba de Mídia para Google Ads",
    responsible: "Ricardo Mikami & V4 Company",
    deadline: "15/10/2026",
    status: "Entregue",
    observation: "Aprovado aporte de R$ 500,00 para ativação das campanhas de busca e rotas locais."
  },
  {
    task: "Impulsionamento da Campanha Outubro Rosa & Planejamento Novembro Azul",
    responsible: "Izabella Lima (V4)",
    deadline: "27/10/2026",
    status: "Entregue",
    observation: "Post de Outubro Rosa colocado em impulsionamento e alinhado o lançamento do Novembro Azul para rodar durante todo o mês seguinte."
  },
  {
    task: "Envio dos 4 Roteiros de Vídeo (Novas Linhas de Comunicação)",
    responsible: "Andreas Rocha Slonzo (V4)",
    deadline: "28/10/2026",
    status: "Entregue",
    observation: "Roteiros enviados para aprovação do Ricardo e posterior captação/produção com o filmmaker."
  },
  {
    task: "Envio da Planilha com Margens dos Produtos (CMV/Preços)",
    responsible: "Ricardo Mikami",
    deadline: "23/10/2026 (Atrasado)",
    status: "Pendente",
    observation: "Imprescindível para calibrar a margem dos novos combos e preparar as ofertas da Black Friday sem sangrar o caixa."
  },
  {
    task: "Desenvolvimento e Lançamento de Criativos de Black Friday",
    responsible: "Andreas Rocha Slonzo (V4) & Ricardo Mikami",
    deadline: "27/10/2026 (Em produção)",
    status: "Pendente",
    observation: "Produção dos vídeos e peças para os combos de alto ticket no Anota AI e refil de soda no salão para a Black Friday (27/11)."
  },
  {
    task: "Troca / Definição do Sistema de Cardápio Digital",
    responsible: "Ricardo Mikami",
    deadline: "A definir",
    status: "Em andamento",
    observation: "Ricardo sinalizou que não seguirá com o Aliv Hub e ajustará internamente antes de definir uma data de transição; Anota AI permanece ativo."
  },
  {
    task: "Produção e Edição dos Novos Vídeos Captados (05/11)",
    responsible: "Giovanna Mariotto (V4)",
    deadline: "Semana do dia 13/11/2026",
    status: "Em andamento",
    observation: "Análise, desenvolvimento, edição e compilação dos novos vídeos gravados em 05/11 para aprovação final com o Ricardo."
  },
  {
    task: "Visita Presencial no Salão do Recanto",
    responsible: "V4 Company & Ricardo Mikami",
    deadline: "Semana do dia 18/11/2026",
    status: "Próxima Etapa",
    observation: "Reunião presencial no salão para apresentar os dados consolidados do trimestre e alinhar os próximos passos do projeto."
  },
  {
    task: "Definição e Aumento da Verba de Mídia",
    responsible: "V4 Company & Ricardo Mikami",
    deadline: "12/11/2026",
    status: "Próxima Etapa",
    observation: "Alinhamento para escolha do modelo de escala de tráfego e definição do orçamento final das campanhas."
  }
];

export const googleAdsPhases = [
  {
    phase: "Fase 1",
    label: "Validação Local",
    budget: "R$ 500/mês",
    daily: "~R$ 16,67/dia",
    clicks: "300 - 420",
    impressions: "4.300 - 6.000",
    routes: "35 - 50",
    description: "Verba complementar para capturar a intenção ativa em Jundiaí ('pizzaria perto de mim', 'rodízio de pizza')."
  },
  {
    phase: "Fase 2",
    label: "Expansão de Raio",
    budget: "R$ 900/mês",
    daily: "~R$ 30,00/dia",
    clicks: "560 - 750",
    impressions: "8.000 - 10.700",
    routes: "65 - 90",
    description: "Incremento de alcance nos dias de menor movimento (terça a quinta) combinando Google Search com os campeões do Meta Ads."
  }
];

export const googleAdsKeywords = [
  { term: "pizzaria perto de mim", intent: "Descoberta local", volume: "300 – 500", priority: "Alta" },
  { term: "pizza perto de mim", intent: "Descoberta local", volume: "250 – 400", priority: "Alta" },
  { term: "rodízio de pizza", intent: "Rodízio", volume: "150 – 250", priority: "Alta" },
  { term: "rodízio de pizza perto de mim", intent: "Descoberta + rodízio", volume: "80 – 150", priority: "Alta" },
  { term: "pizzaria jundiaí", intent: "Geo de marca de nicho", volume: "90 – 150", priority: "Alta" }
];

export const gmnStrategy = [
  {
    title: "Estrutura & Descoberta",
    subtitle: "Base do perfil",
    items: [
      "Ajustar categoria principal para 'Pizzaria' e secundárias 'Restaurante' e 'Buffet'; ativar atributos de rodízio, ambiente para grupos e estacionamento.",
      "Padronizar nome, endereço e telefone (NAP) idênticos ao site e às redes.",
      "Cadastrar o cardápio do rodízio em 'Produtos', com fotos e preço de cada opção."
    ]
  },
  {
    title: "Prova Social & Conteúdo",
    subtitle: "Confiança para converter",
    items: [
      "Ativar coleta de avaliações via QR code na mesa/comanda ao fim do rodízio.",
      "Responder 100% das avaliações — positivas e negativas — em até 24h.",
      "Atualizar fotos do salão e do rodízio a cada 15 dias (ambiente + pizza saindo do forno)."
    ]
  }
];

export const socialMetrics = [
  { label: "Visualizações", value: "129.901", trend: "↑ 47,6%", positive: true },
  { label: "Alcance", value: "12.475", trend: "↑ 65,2%", positive: true },
  { label: "Interações", value: "3.500", trend: "↑ 120,3%", positive: true },
  { label: "Visitas ao Perfil", value: "6.100", trend: "↓ 13,7%", positive: false },
  { label: "Novos Seguidores", value: "544", trend: "↓ 12,7%", positive: false },
  { label: "Cliques no Link", value: "126", trend: "—", positive: true }
];

export const socialTopPosts = [
  {
    rank: "1º",
    title: "21 anos de Recanto",
    type: "Imagem",
    date: "11/08",
    image: "https://i.imgur.com/iCErjI1.jpeg",
    views: "13.074",
    reach: "6.474",
    engagement: "11,2%",
    likes: 532,
    comments: 97,
    shares: 91,
    saves: 5
  },
  {
    rank: "2º",
    title: "Tem um Silva no grupo?",
    type: "Imagem",
    date: "07/09",
    image: "https://i.imgur.com/q86zH8A.jpeg",
    views: "10.381",
    reach: "3.370",
    engagement: "7,51%",
    likes: 77,
    comments: 20,
    shares: 151,
    saves: 5
  }
];

export const socialInsights = {
  works: [
    {
      title: "Identidade e Humanização",
      description: "O post de 21 anos bateu 11,2% de engajamento. A audiência responde muito bem quando a marca fala da própria história e das pessoas."
    },
    {
      title: "Mecânicas Promocionais Nominais",
      description: "Desafio Verde (192 compartilhamentos) e Silva (151 compartilhamentos). Campanhas com nomes próprios furam a bolha de seguidores e trazem alcance viral."
    }
  ],
  attention: [
    {
      title: "Retenção nos Reels",
      description: "Os 5 Reels ficaram abaixo do potencial (1k-2k views). O hook dos 3 primeiros segundos precisa ser mais agressivo para segurar o scroll."
    }
  ],
  nextCycle: [
    "Manter 2 posts mensais de humanização (bastidores, equipe).",
    "Manter campanhas nominais ativas (Desafio Silva) e pensar em renovação."
  ]
};
