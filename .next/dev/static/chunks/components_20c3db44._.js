(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers,
    "translations",
    ()=>translations,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const translations = {
    PT: {
        language: 'PT',
        nav: {
            projects: "Portfólio",
            about: "Trajetória",
            contact: "Contato",
            cta: "Currículo"
        },
        hero: {
            badge: "Lógica, Dados & Engenharia de Software",
            title_part1: "Beatryz",
            title_part2: "Kleuvyn.",
            tagline: "Software Engineer & Data Analyst Jr.",
            description: "Construindo soluções robustas de ponta-a-ponta fundamentadas no rigor da matemática e da física. Especialista em ciência de dados, IA e arquitetura web escalável.",
            cta_primary: "Visitar Obras",
            cta_secondary: "Resumo Profissional"
        },
        about: {
            badge: "Perfil Profissional",
            title_part1: "Rigor Analítico e",
            title_part2: "Engenharia de Software",
            description: "Pós-graduada em MBA de Tecnologia para Negócios, Ciência de Dados e Inteligência Artificial, unindo forte expertise acadêmica em formação matemática com desenvolvimento de alto impacto. Da sala de aula ensinando física e filosofia à liderança técnica de sistemas comerciais.",
            trajectory_title: "Currículo",
            trajectory_subtitle: "Minha jornada profissional e acadêmica.",
            skills: [
                {
                    title: "Matemática & Física",
                    description: "Licencianda. Capacidade avançada de modelagem lógica, abstração de sistemas complexos e otimização de algoritmos."
                },
                {
                    title: "Software Engineering",
                    description: "Engenheira Full Stack (React, Node.js, Prisma, Docker, SQL) formando arquiteturas e interfaces escaláveis."
                },
                {
                    title: "Data Science & IA",
                    description: "Especialista e MBA. Refinamento de bases de dados (Pandas, Regex), Chatbots e integrações focadas na experiência do usuário."
                }
            ],
            experience: [
                {
                    year: "2025 — Atual",
                    role: "Analista de Dados Jr. | Projeto Voluntário",
                    company: "Stoá",
                    desc: "Criação de chatbot com IA para doadores. Utilização de Python (Pandas, Regex), análise textual e modelamento de respostas lógicas em IA para aprimoramento de interação digital e automação."
                },
                {
                    year: "Ago 2024 — Abr 2025",
                    role: "Professora do Ensino Médio",
                    company: "Colégio Ápice Educacional",
                    desc: "Atuação como educadora de Matemática, Física e Filosofia. Responsável por alinhar lógica racional pura ao desenvolvimento do pensamento crítico analítico com centenas de alunos."
                },
                {
                    year: "2023 — 2024",
                    role: "Desenvolvedora e Líder Técnica",
                    company: "IESB (Projeto Voluntário)",
                    desc: "Liderança arquitetural (Frontend e Backend) no desenvolvimento de um PDV focado em impacto comunitário, utilizando JS, React, Node, Prisma, MySQL e Docker."
                }
            ],
            education: [
                {
                    year: "Concluído",
                    course: "MBA em Tecnologia para Negócios: AI, Data Science e Big Data",
                    institution: "Líbano"
                },
                {
                    year: "Concluído",
                    course: "Pós-graduação em Ciência de Dados e Inteligência Artificial",
                    institution: "Líbano"
                },
                {
                    year: "Concluído",
                    course: "Análise e Desenvolvimento de Sistemas",
                    institution: "IESB"
                },
                {
                    year: "Em andamento",
                    course: "Licenciatura em Física",
                    institution: "UniCesumar"
                },
                {
                    year: "Julho / 2026",
                    course: "Licenciatura em Matemática",
                    institution: "UniCesumar"
                }
            ]
        },
        projects: {
            title_part1: "Registro de",
            title_part2: "Sistemas",
            description: "Exposições da minha engenharia, englobando integrações PWA, arquiteturas orientadas a eventos e modelagem.",
            live_demo: "Visitar Site",
            github: "Repositório",
            hover_view: "Esmiuçar"
        },
        contact: {
            badge: "Vamos Conversar?",
            title_part1: "Conexões",
            title_part2: "Profissionais",
            description: "Disponível para novos desafios, arquitetura de soluções, análise de dados e palestras.",
            whatsapp_title: "WhatsApp",
            whatsapp_desc: "(61) 98466-0734",
            whatsapp_cta: "Chamar no Whats",
            email_title: "E-mail",
            email_desc: "b.kleuvyn@gmail.com",
            linkedin_title: "LinkedIn",
            linkedin_desc: "Beatryz Kleuvyn",
            linkedin_cta: "Conectar",
            main_cta: "Agendar Reunião",
            status_available: "Aceitando Contratos Free-Lancer",
            status_global: "Website Institucional: kleuvyn.tec.br"
        }
    },
    EN: {
        language: 'EN',
        nav: {
            projects: "Portfolio",
            about: "Trajectory",
            contact: "Contact",
            cta: "Resume"
        },
        hero: {
            badge: "Logic, Data & Software Engineer",
            title_part1: "Beatryz",
            title_part2: "Kleuvyn.",
            tagline: "Software Engineer & Data Analyst Jr.",
            description: "Building robust end-to-end solutions grounded in the rigor of mathematics and physics. Specialist in data science, AI, and scalable web architecture.",
            cta_primary: "View Work",
            cta_secondary: "Professional Resume"
        },
        about: {
            badge: "Professional Profile",
            title_part1: "Analytical Rigor &",
            title_part2: "Software Engineering",
            description: "Hold an MBA in Business Tech (AI/Data Science) and a post-grad in AI, marrying deep academic math background with high-impact software development. From teaching high school physics to tech leading commercial systems.",
            trajectory_title: "Resume",
            trajectory_subtitle: "My academic and professional journey.",
            skills: [
                {
                    title: "Mathematics & Physics",
                    description: "Undergraduate. Advanced capabilities in logical modeling, abstraction of complex systems, and algorithm optimization."
                },
                {
                    title: "Software Engineering",
                    description: "Full Stack Engineer (React, Node.js, Prisma, Docker, SQL) crafting scalable architectures and interfaces."
                },
                {
                    title: "Data Science & AI",
                    description: "Specialist & MBA. Database refinement (Pandas, Regex), Chatbots, and user-experience focused integrations."
                }
            ],
            experience: [
                {
                    year: "2025 — Present",
                    role: "Jr. Data Analyst | Volunteer",
                    company: "Stoá",
                    desc: "Chatbot AI creation for donors. Applied Python (Pandas, Regex), textual analysis, and AI logical modeling to enhance digital interaction and automation."
                },
                {
                    year: "Aug 2024 — Apr 2025",
                    role: "High School Teacher",
                    company: "Ápice College",
                    desc: "Educator in Math, Physics, and Philosophy. Responsible for aligning pure rational logic with the development of critical thinking for hundreds of students."
                },
                {
                    year: "2023 — 2024",
                    role: "Full Stack Dev & Tech Lead",
                    company: "IESB (Volunteer)",
                    desc: "Architectural leadership (Frontend & Backend) for a community-impact POS application. Tech stack: JS, React, Node, Prisma, MySQL, and Docker."
                }
            ],
            education: [
                {
                    year: "Completed",
                    course: "MBA in Business Technology: AI, Data Science & Big Data",
                    institution: "Lebanon"
                },
                {
                    year: "Completed",
                    course: "Post-Graduate in Data Science & Artificial Intelligence",
                    institution: "Lebanon"
                },
                {
                    year: "Completed",
                    course: "Systems Analysis and Development",
                    institution: "IESB"
                },
                {
                    year: "Ongoing",
                    course: "BSc in Physics",
                    institution: "UniCesumar"
                },
                {
                    year: "July / 2026",
                    course: "BSc in Mathematics",
                    institution: "UniCesumar"
                }
            ]
        },
        projects: {
            title_part1: "System",
            title_part2: "Logs",
            description: "Exhibitions of my engineering, covering PWA integrations, event-driven architectures, and modeling.",
            live_demo: "Live Demo",
            github: "Repo",
            hover_view: "Inspect"
        },
        contact: {
            badge: "Let's Chat?",
            title_part1: "Professional",
            title_part2: "Connections",
            description: "Available for new challenges, architecture solutions, data analysis, and talks.",
            whatsapp_title: "WhatsApp",
            whatsapp_desc: "+55 (61) 98466-0734",
            whatsapp_cta: "Send a Message",
            email_title: "Email",
            email_desc: "b.kleuvyn@gmail.com",
            linkedin_title: "LinkedIn",
            linkedin_desc: "Beatryz Kleuvyn",
            linkedin_cta: "Connect",
            main_cta: "Schedule Meeting",
            status_available: "Accepting Freelance Contracts",
            status_global: "Official Website: kleuvyn.tec.br"
        }
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function Providers({ children, ...props }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('PT');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Providers.useEffect": ()=>{
            const savedLang = localStorage.getItem('language');
            if (savedLang && (savedLang === 'PT' || savedLang === 'EN')) {
                setLanguage(savedLang);
            }
        }
    }["Providers.useEffect"], []);
    const handleSetLanguage = (lang)=>{
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };
    const t = translations[language];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
            value: {
                language,
                setLanguage: handleSetLanguage,
                t
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/components/providers.tsx",
            lineNumber: 234,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/providers.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
}
_s(Providers, "Z0fUrGSstvGxoYPb/p1kJ3NlDAI=");
_c = Providers;
const useLanguage = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) throw new Error('useLanguage deve ser usado dentro de Providers');
    return context;
};
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site-effects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteEffects",
    ()=>SiteEffects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/providers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sigma.js [app-client] (ecmascript) <export default as Sigma>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SiteEffects() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    // Efeito elegante/suave do progresso de leitura
    const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteEffects.useEffect": ()=>{
            // Tranca o scroll da página enquanto o splash screen carrega
            if (isLoading) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset";
            }
            const timer = setTimeout({
                "SiteEffects.useEffect.timer": ()=>{
                    setIsLoading(false);
                }
            }["SiteEffects.useEffect.timer"], 1800) // Duração ideal pra ser chique mas não arrastado.
            ;
            return ({
                "SiteEffects.useEffect": ()=>clearTimeout(timer)
            })["SiteEffects.useEffect"];
        }
    }["SiteEffects.useEffect"], [
        isLoading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[9998]",
                style: {
                    scaleX
                }
            }, void 0, false, {
                fileName: "[project]/components/site-effects.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0,
                        filter: "blur(10px)"
                    },
                    transition: {
                        duration: 0.8,
                        ease: "easeInOut"
                    },
                    className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/components/site-effects.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            transition: {
                                duration: 0.6,
                                ease: "easeOut",
                                delay: 0.1
                            },
                            className: "flex flex-col items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"], {
                                    className: "w-12 h-12 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-effects.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-bold",
                                            children: t.language === 'PT' ? 'Lógica & Arquitetura' : 'Logic & Architecture'
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-effects.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl md:text-5xl font-serif italic text-primary/90",
                                            children: t.language === 'PT' ? 'Capítulo 01' : 'Chapter 01'
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-effects.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site-effects.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-effects.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                width: 0
                            },
                            animate: {
                                width: "200px"
                            },
                            transition: {
                                duration: 1.5,
                                ease: "easeInOut"
                            },
                            className: "h-[1px] bg-primary/30 mt-10"
                        }, void 0, false, {
                            fileName: "[project]/components/site-effects.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site-effects.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/site-effects.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SiteEffects, "uf8BrcNa7pLncMsg+KbFWQX9HD8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = SiteEffects;
var _c;
__turbopack_context__.k.register(_c, "SiteEffects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_20c3db44._.js.map