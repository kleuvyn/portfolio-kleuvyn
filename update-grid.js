const fs = require('fs');
const content = fs.readFileSync('components/projects-grid.tsx', 'utf8');

const startStr = "const projects = [";
const endStr = "  return (";

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

const newProjects = `const projects = [
    {
      title: "Psicóloga Beatriz M. Waltz",
      description: "Landing Page focada em Terapia Cognitivo-Comportamental, unindo design acolhedor e alta performance.",
      image: "/psiciloga.png",
      tags: ["Next.js", "TypeScript", "Tailwind", "SEO", "WCAG"],
      githubUrl: "https://github.com/kleuvyn/Psiciloga-Clinica",
      liveUrl: "#",
      role: "Front-end Developer",
      challenge: "Projetar uma interface intuitiva para facilitar o contato e agendamento rápido de pacientes, unindo design acolhedor clínico e os mais altos rigores de performance.",
      architecture: "Projeto desenvolvido inteiramente com Next.js, Tipagem Específica em TypeScript e Tailwind CSS. Foco em acessibilidade profunda (WCAG) e arquitetura SEO estratégica.",
      impact: "A aliança entre acolhimento visual e otimização gerou maior retenção orgânica, otimizando integralmente o fluxo de chamadas e a experiência terapêutica digital."
    },
    {
      title: "Calendário Literário: Seu Ano em Páginas",
      description: "O tempo e as suas leituras. Seu calendário literário digital para registrar dias lidos, organizar metas e acompanhar progresso.",
      image: "/calendario.png",
      tags: ["Next.js", "PWA", "Canvas API", "Tailwind"],
      githubUrl: "https://github.com/kleuvyn/Calendario_Literario",
      liveUrl: "#",
      role: "Full Stack Developer",
      challenge: "Incentivar a constância diária literária. Prover metas, retrospectivas anuais personalizadas e um espaço rico construído sob estética de diário para criar Notas e Resenhas íntimas.",
      architecture: "Web App Progressivo (PWA) de altíssima performance. Uso massivo de manipulação Canvas API do HTML5 para geração vetorial dinâmica e arquitetura robusta client-side offline-first.",
      impact: "A aplicação recriou o vínculo afetivo dos cadernos de leitura num ambiente digital reativo, ajudando bibliófilos a atingirem suas sincrônicas metas anuais e retrospectivas."
    },
    {
      title: "Chatbot IA - Ritmos do Coração",
      description: "Assistência focada na visibilidade: ajudando uma ONG local a arrecadar fundos e prover acolhimento aos mantenedores.",
      image: "/ritmos.png",
      tags: ["Python", "Dialogflow", "Data Science", "NLP"],
      githubUrl: "https://github.com/kleuvyn/Ritmos-do-Coracao",
      liveUrl: "#",
      role: "Data & AI Specialist",
      challenge: "Criar um canal digital humano e eficiente para a ONG, destinado primordialmente a arrecadar fundos e ajudar estrategicamente a atrair visibilidade ao coração do projeto.",
      architecture: "Engenharia de conversação de fluxo rigoroso focada em impacto social. Usou-se Python aliado diretamente à análise estatística contextual semântica de ponta com Dialogflow (NLP).",
      impact: "Cortou dependência massiva manual ao otimizar inteligentemente o suporte acolhedor diário a doadores em tempo real, maximizando injeção financeira aos tratamentos vitais cardíacos."
    },
    {
      title: "Plataforma PDV - IESB",
      description: "Sistema para ponto de vendas (POS) com desenvolvimento full-cycle focado em alta performance transacional e comunitária.",
      image: "/pdv.png",
      tags: ["React", "Node.js", "Prisma", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      role: "Tech Lead",
      challenge: "Liderar a formulação corporativa de uma plataforma comercial PDV escalável que precisava apoiar diretamente dezenas de transações financeiras garantindo um fundo de causa comunitária.",
      architecture: "Diretrizes severas com Node.js na raiz da API consumindo Prisma ORM num banco SQL relacional blindado pelo React no Front-End. O fluxo inteiro encapsulado infra-agnóstico focado em Docker.",
      impact: "Estabilizou o funil operacional do faturamento mercadológico social da instituição, consolidando um ecossistema estável comercial altamente resistente sobre pressões financeiras sazonais."
    },
    {
      title: "Mapa Cultural de Brasília",
      description: "Guia digital interativo listando livrarias, sebos, bibliotecas, teatros, bares de jazz, rock e eventos locais.",
      image: "/guia-cultural.png",
      tags: ["Next.js", "TypeScript", "Google Maps API"],
      githubUrl: "https://github.com/kleuvyn/Mapa-Cultural-de-Brasilia",
      liveUrl: "#",
      role: "Full Stack Engineer",
      challenge: "Digerir fragmentos dispersos do ecossistema federal: Organizar em massa livrarias, teatros, cafés, bares de jazz & rock, para simplificar a descoberta de novos lugares na capital.",
      architecture: "Tratamento tático de um Big Data logístico regional mapeado geograficamente na Google Maps API sob tipagem profunda em TS. Renderização SSR focada em navegação categorizada e responsiva em Next.",
      impact: "Mudança total na fruição local; Uma vitrine geoespacial intuitiva que unificou uma cidade imensa, democratizando ativamente novos espaços culturais focados num estilo de interface unicamente indolor."
    },
    {
      title: "Vida Ativa",
      description: "Plataforma segura, discreta e resiliente dedicada exclusivamente ao acesso e apoio a mulheres em situação de risco vital.",
      image: "/vida-ativa.png",
      tags: ["Pronto/Em Breve", "Security", "Next.js", "Social Impact"],
      githubUrl: "https://github.com/kleuvyn/Vida-Ativa",
      liveUrl: "#",
      role: "Tech Lead Dev",
      challenge: "Estabelecer uma rede blindada que provesse informações muito confiáveis, recursos acessíveis emergenciais e uma rede de suporte especializada em uma UX empoderadora e de pleno acolhimento.",
      architecture: "Design focado completamente no anonimato e segurança digital rigorosa sob a flexibilidade do ecossistema front robusto do Next.js sem indexar dados frágeis de mulheres.",
      impact: "A plataforma converteu-se e desenha ser um dos maiores canais locais de empoderamento e proteção feminista isolando potenciais riscos, dando fôlego essencial à autonomia transformando rotinas e vidas."
    },
    {
      title: "Encaixe Certo",
      description: "Descubra seu perfeito encaixe no mercado: mapeie descrições de vagas tech visualizando as top habilidades.",
      image: "/encaixe-certo.png",
      tags: ["React", "Node.js", "Data Analytics"],
      githubUrl: "https://github.com/kleuvyn/Encaixe-Certo",
      liveUrl: "#",
      role: "Data Engineer",
      challenge: "Entender visualmente as distâncias exatas entre os requisitos complexos (Job Descriptions viciosas) e identificar as habilidades tecnológicas reais e palpáveis demandadas na rotina clara.",
      architecture: "Engine analítica de processamento ocupacional usando mineração de dados por trás de um Node.js tático comparando e plotando matching formativos vetoriais consumidos ativamente via React.",
      impact: "Facilitou cirurgicamente a rota educacional do operante Júnior, elucidando tendências obscuras do setor tecnológico e encurtando anos desperdiçados no planejamento de novas candidaturas tech."
    },
    {
      title: "Conquista Diária",
      description: "Site projetado para auxiliar no gerenciamento de matérias e cronogramas de estudos gamificados de estudantes.",
      image: "/conquista-diaria.png",
      tags: ["Next.js", "PostgreSQL", "Auth.js"],
      githubUrl: "https://github.com/kleuvyn/Conquista_Diaria",
      liveUrl: "#",
      role: "Em Breve",
      challenge: "Diminuir a curva de tédio educacional com metas alcançáveis ajudando estudantes a celebrar conquistas diárias diárias em seus exaustivos cronogramas personalizados.",
      architecture: "Sistemas gamificados focados ativamente sobre um banco relacional consistente (PostgreSQL). Renderização do lado do servidor para roteamentos protegidos dinamicamente sob Auth.js.",
      impact: "A implementação transformará dores acadêmicas pesadas num portal em formato de diário virtual altamente propulsor pavimentando uma trilha intuitiva consolidada para o inevitável sucesso acadêmico."
    },
    {
      title: "Raízes de Cuidado",
      description: "Plataforma focada em assistência de saúde para a mulher facilitando o cuidado mental com fluxos de agendamentos sensíveis e rápidos online.",
      image: "/psi-amanda.png",
      tags: ["React", "SEO", "Accessibility"],
      githubUrl: "https://github.com/kleuvyn/Raizes-de-Cuidado-Psi-Amanda-",
      liveUrl: "#",
      role: "Em Breve",
      challenge: "Estruturar o sensível ecossistema ambulatorial online para a Saúde Vital Feminina garantindo extremo conforto na experiência de marcações enquanto respeita restrições lógicas técnicas de conversão web.",
      architecture: "Um esqueleto institucional de extrema leveza montado no reator central do React integrado ao controle rígido dos requisitos WCAG de design universal orgânico global focando amplamente no SEO local metropolitano.",
      impact: "Transparência total nos acessos de terapia, destravando e digitalizando canais fundamentais para a rede metódica de zelo em tempos difíceis garantindo o apoio mental às interessadas num instante crucial."
    },
    {
      title: "Cebrapol",
      description: "Comunidade focada em pesquisa e perspectivas globais das métricas do Estado-Sociedade de forma digital reativa em painel logístico moderno.",
      image: "/cebrapol.png",
      tags: ["PWA", "Admin", "Analytics", "PostgreSQL"],
      githubUrl: "https://github.com/Cebrapol/",
      liveUrl: "#",
      role: "Tech Lead Dev",
      challenge: "Ser um instrumento que dissemina instantaneamente o conhecimento global do Complexo Social fomentando a participação acadêmica ativa das instituições na vida pública engajada contínua e digitalmente logada e atenta na política.",
      architecture: "Plataforma dashboard inteira reativa conectada ativamente na latência real usando métricas pesadas de tabelas geográficas atrelando Painéis Analytics consumidos online ou off (PWA).",
      impact: "Unificando milhares de frentes operacionais em um hub central, a plataforma fortificou o fôlego sociopolítico democratizando a exposição local na pesquisa unificando cientistas numa rede palpável ativa e visual."
    },
    {
      title: "Meu Inglês Possível",
      description: "Mentor autônomo focado em conversação orientado por Inteligência Artificial unida a análises em tempo real de feedback gramatical contínuo de NLP preditivo profundo sem penalização algoritmica analítica fluente na linguística inglesa conversacional logada.",
      image: "/ingles.png",
      tags: ["Next.js", "AI SDK", "OpenAI", "Tailwind"],
      githubUrl: "https://github.com/kleuvyn/meu_ingles_possivel",
      liveUrl: "#",
      role: "Em Breve",
      challenge: "Reduzir absurdamente o constrangimento na hora e instante vital de cometer graves erros em outros idiomas, concebendo na máquina as ferramentas necessárias de feedback corretivo com respostas estritamente precisas e lógicas e instintivas interativas em tempo ágil na API.",
      architecture: "Uso do Vercel AI SDK como duto central entre modelos gpt-base no gateway em Next.js para manter fluxos rápidos nativos inferindo lógicas conversacionais renderizando um front tático elegante estático com Tailwind reativo.",
      impact: "O modelo barateado pelo formato Web viabilizou o processo imersivo instantâneo quebrando um enorme entrave analítico comportamental trazendo maior confiança num nível formador que altera para melhor e drasticamente o tempo vital e essencial na curva inicial de absorção fonética lexical formatada."
    }
  ]

`;

const newContent = content.substring(0, startIndex) + newProjects + content.substring(endIndex);
fs.writeFileSync('components/projects-grid.tsx', newContent);
