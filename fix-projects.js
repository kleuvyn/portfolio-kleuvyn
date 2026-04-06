const fs = require('fs');
const path = './components/projects-grid.tsx';
let data = fs.readFileSync(path, 'utf8');

const startStr = '  const projects = [';
const endStr = '  ]\n\n  return (';
const p1 = data.indexOf(startStr);
const p2 = data.indexOf(endStr, p1) + endStr.length - 12;

const newProjects = `  const projects = [
    {
      title: "Clube das Leitoras",
      description: "Plataforma comunitária para amantes da leitura compartilharem experiências e debaterem suas literaturas favoritas.",
      image: "/clubedasleitoras.png",
      tags: ["Pronto/Em Breve", "Comunidade", "Literatura"],
      githubUrl: "#",
      liveUrl: "#",
      role: "Em Aberto",
      challenge: "Em construção. Precisamos dos detalhes deste projeto!",
      architecture: "Em construção. Precisamos dos detalhes deste projeto!",
      impact: "Em construção. Precisamos dos detalhes deste projeto!"
    },
    {
      title: "Cebrapol",
      description: "Somos uma comunidade comprometida com o desenvolvimento humano, produzindo e disseminando conhecimento a partir de uma perspectiva global do Complexo Estado-Sociedade, fomentando a consolidação democrática e a participação na vida política.",
      image: "/cebrapol.png",
      tags: ["PWA", "Admin", "Analytics", "PostgreSQL"],
      githubUrl: "https://github.com/Cebrapol/",
      liveUrl: "#",
      role: "Tech Lead Dev",
      challenge: "Ser um instrumento que dissemina instantaneamente o conhecimento global do Complexo Social fomentando a participação acadêmica ativa.",
      architecture: "Plataforma dashboard inteira reativa conectada ativamente na latência real usando métricas pesadas de tabelas geográficas atrelando Painéis Analytics consumidos online ou off (PWA).",
      impact: "Unificando milhares de frentes operacionais em um hub central."
    },
    {
      title: "Calendário Literário",
      description: "O tempo e as suas leituras. Seu calendário literário digital. Registre seus dias lidos, organize suas metas anuais e acompanhe seu progresso de leitura mês a mês.",
      image: "/calendario.png",
      tags: ["Next.js", "PWA", "Canvas API", "Tailwind"],
      githubUrl: "https://github.com/kleuvyn/Calendario_Literario",
      liveUrl: "#",
      role: "Full Stack Developer",
      challenge: "Acompanhe sua constância de leitura diária. Defina e visualize seus objetivos anuais numa estética de diário para Notas e Resenhas.",
      architecture: "Web App (PWA) de alta performance para gestão de leitura. Implementação de Canvas API para geração dinâmica de assets visuais e arquitetura offline-first para sincronização de metas.",
      impact: "A aplicação recriou o vínculo afetivo dos cadernos de leitura num ambiente digital reativo."
    },
    {
      title: "Elas nas Exatas",
      description: "Espaço de apoio e visibilidade onde mulheres compartilham trajetórias e encontram recursos para crescer em STEM.",
      image: "/elas-nas-exatas.png",
      tags: ["React", "STEM", "Comunidade", "Acessibilidade"],
      githubUrl: "https://github.com/kleuvyn/Elas-nas-Exatas",
      liveUrl: "#",
      role: "Frontend Developer",
      challenge: "Criar uma plataforma acolhedora e acessível que atue como ponte de conexão, empoderamento e visibilidade para mulheres em ciência, tecnologia, engenharia e matemática.",
      architecture: "Desenvolvimento focado em Front-End tático e UX Inclusiva (WCAG), estruturando uma ponte comunitária resiliente e amplamente escalável via componentes React.",
      impact: "Fomenta a representatividade e a troca de saberes, construindo uma rede de apoio prática."
    },
    {
      title: "Psicóloga Beatriz M. Waltz",
      description: "Landing Page para a psicóloga Beatriz M. Waltz, focada em Terapia Cognitivo-Comportamental, unindo design acolhedor e alta performance.",
      image: "/psiciloga.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
      githubUrl: "https://github.com/kleuvyn/Psiciloga-Clinica",
      liveUrl: "#",
      role: "Front-end Developer",
      challenge: "Foco em acessibilidade, SEO e uma interface intuitiva para facilitar o contato e agendamento de pacientes.",
      architecture: "Projeto desenvolvido com Next.js, TypeScript e Tailwind CSS, unindo design acolhedor e alta performance.",
      impact: "A aliança entre acolhimento visual e otimização gerou maior retenção orgânica, otimizando integralmente o fluxo de chamadas."
    },
    {
      title: "Raízes de Cuidado",
      description: "Plataforma online de agendamentos focada na assistência, na ajuda à vida e no cuidado com a mulher.",
      image: "/psi-amanda.png",
      tags: ["React", "SEO", "Accessibility"],
      githubUrl: "https://github.com/kleuvyn/Raizes-de-Cuidado-Psi-Amanda-",
      liveUrl: "#",
      role: "Em Breve",
      challenge: "Estruturar o sensível ecossistema ambulatorial online para a Saúde Vital Feminina garantindo conforto na experiência de marcações.",
      architecture: "Desenvolvimento institucional otimizado para SEO e conversão de serviços psicológicos, priorizando acessibilidade (WCAG) e experiência do usuário (UX).",
      impact: "Transparência total nos acessos de terapia, destravando canais fundamentais para a rede metódica de zelo."
    },
    {
      title: "Chatbot IA - Ritmos do Coração",
      description: "Assistência focada na visibilidade para ajudar ONG local a arrecadar fundos e prover acolhimento aos envolvidos.",
      image: "/ritmos.png",
      tags: ["Python", "Dialogflow", "Data Science", "NLP"],
      githubUrl: "https://github.com/kleuvyn/Ritmos-do-Coracao",
      liveUrl: "#",
      role: "Data & AI Specialist",
      challenge: "Criar um canal digital humano e eficiente para a ONG, destinado primordialmente a arrecadar fundos e ajudar estrategicamente a atrair visibilidade.",
      architecture: "Engenharia de conversação para impacto social. Estruturação de fluxos orientados a dados e análise estatística textual para otimizar o suporte humanizado a doadores.",
      impact: "Cortou dependência massiva manual ao otimizar intelligentemente o suporte diário a doadores."
    },
    {
      title: "Encaixe Certo",
      description: "Descubra o seu Encaixe Certo no mercado de trabalho. Analise descrições de vagas e visualize as habilidades mais demandadas de forma clara.",
      image: "/encaixe-certo.png",
      tags: ["React", "Node.js", "Data Analytics"],
      githubUrl: "https://github.com/kleuvyn/Encaixe-Certo",
      liveUrl: "#",
      role: "Data Engineer / Dev",
      challenge: "Entender visualmente as distâncias entre os requisitos e identificar as habilidades tecnológicas reais demandadas na rotina.",
      architecture: "Engine de análise ocupacional que utiliza processamento de dados para identificar gaps de habilidades e tendências de mercado no setor tecnológico.",
      impact: "Facilitou cirurgicamente a rota educacional do operante Júnior, elucidando tendências do setor tecnológico."
    },
    {
      title: "Mapa Cultural de Brasília",
      description: "Criei um guia digital interativo para reunir os principais espaços culturais da capital federal: livrarias, sebos, cafés, bibliotecas, teatros.",
      image: "/guia-cultural.png",
      tags: ["Next.js", "TypeScript", "Google Maps API"],
      githubUrl: "https://github.com/kleuvyn/Mapa-Cultural-de-Brasilia",
      liveUrl: "#",
      role: "Full Stack Engineer",
      challenge: "Organizar informações sobre bares de jazz & rock, eventos e espaços kids & ludotecas, facilitando a navegação por categorias e a descoberta de novos lugares.",
      architecture: "Solução geoespacial interativa para mapeamento de ecossistemas culturais. Organização de Big Data regional em uma interface intuitiva e responsiva.",
      impact: "Uma vitrine geoespacial intuitiva que unificou uma cidade imensa, democratizando espaços culturais."
    },
    {
      title: "Plataforma PDV - IESB",
      description: "Plataforma PDV - IESB. Um ponto de vendas robusto e rápido.",
      image: "/pdv.png",
      tags: ["React", "Node.js", "Prisma", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      role: "Tech Lead/Full Stack Developer",
      challenge: "Liderar a formulação corporativa de uma plataforma comercial PDV escalável focada em impactos da comunidade.",
      architecture: "Liderança técnica na arquitetura de um sistema de Ponto de Venda (POS) escalável. Desenvolvimento full-cycle focado em performance transacional e impacto comunitário.",
      impact: "Estabilizou o funil operacional do faturamento mercadológico social da instituição."
    },
    {
      title: "Conquista Diária",
      description: "O Conquista Diária é um site projetado para ajudar você a criar cronogramas de estudos personalizados, organizar suas matérias e definir metas.",
      image: "/conquista-diaria.png",
      tags: ["Next.js", "PostgreSQL", "Auth.js"],
      githubUrl: "https://github.com/kleuvyn/Conquista_Diaria",
      liveUrl: "#",
      role: "Em Breve",
      challenge: "Celebre suas conquistas diárias na jornada rumo ao conhecimento. Simplifique seu caminho para o sucesso acadêmico conosco.",
      architecture: "Sistemas de gestão de aprendizado gamificado (LMS). Implementação de algoritmos de cronogramas personalizados e gestão de progresso dinâmico.",
      impact: "Transformará dores acadêmicas num portal virtual altamente propulsor conectando o estudante ao sucesso educacional."
    },
    {
      title: "Meu Inglês Possível",
      description: "Mentor autônomo focado em conversação orientado por Inteligência Artificial, com análise em tempo real textual e falada.",
      image: "/ingles.png",
      tags: ["Next.js", "AI", "OpenAI", "Tailwind"],
      githubUrl: "https://github.com/kleuvyn/meu_ingles_possivel",
      liveUrl: "#",
      role: "Em Breve",
      challenge: "Reduzir o constrangimento na hora de cometer erros em idiomas estrangeiros com feedback e ferramentas amigáveis.",
      architecture: "Uso do Vercel AI SDK como duto central entre modelos GPT em Next.js para manter fluxos rápidos nativos inferindo lógicas audíveis.",
      impact: "Dá a chance real de qualquer pessoa errar sozinha e ir consertando seu vocabulário fonético com um IA treinador paciente."
    },
    {
      title: "Vida Ativa",
      description: "Vida Ativa é uma plataforma segura e discreta dedicada a apoiar mulheres em situação de risco.",
      image: "/vida-ativa.png",
      tags: ["Pronto/Em Breve", "Security", "Next.js", "Social Impact"],
      githubUrl: "https://github.com/kleuvyn/Vida-Ativa",
      liveUrl: "#",
      role: "Em Breve",
      challenge: "Por meio de informações confiáveis, recursos acessíveis e uma rede de suporte especializada, oferecemos um espaço de acolhimento, empoderamento e proteção para promover a autonomia feminina e ajudar a transformar vidas.",
      architecture: "Plataforma resiliente focada em segurança e empoderamento feminino. Arquitetura orientada à privacidade com fluxos de suporte especializados e UX de acolhimento.",
      impact: "Desenha ser um dos maiores canais locais de proteção feminista isolando riscos e dando fôlego à autonomia e transformando rotinas."
    }
  ]`;

data = data.substring(0, p1) + newProjects + data.substring(p2);
fs.writeFileSync(path, data);
console.log("Feito.")
