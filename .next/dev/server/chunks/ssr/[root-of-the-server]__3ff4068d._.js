module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers,
    "translations",
    ()=>translations,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
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
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function Providers({ children, ...props }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('PT');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedLang = localStorage.getItem('language');
        if (savedLang && (savedLang === 'PT' || savedLang === 'EN')) {
            setLanguage(savedLang);
        }
    }, []);
    const handleSetLanguage = (lang)=>{
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };
    const t = translations[language];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
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
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) throw new Error('useLanguage deve ser usado dentro de Providers');
    return context;
};
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>J,
    "useTheme",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var M = (e, i, s, u, m, a, l, h)=>{
    let d = document.documentElement, w = [
        "light",
        "dark"
    ];
    function p(n) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((y)=>{
            let k = y === "class", S = k && a ? m.map((f)=>a[f] || f) : m;
            k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
        }), R(n);
    }
    function R(n) {
        h && w.includes(n) && (d.style.colorScheme = n);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
        p(y);
    } catch (n) {}
};
var b = [
    "light",
    "dark"
], I = "(prefers-color-scheme: dark)", O = ("TURBOPACK compile-time value", "undefined") == "undefined", x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0), U = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](x)) != null ? e : U;
}, J = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](x) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, e.children) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](V, {
        ...e
    }), N = [
    "light",
    "dark"
], V = ({ forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R })=>{
    let [c, n] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>H(m, l)), [T, y] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>c === "system" ? E() : c), k = d ? Object.values(d) : a, S = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = o;
        if (!r) return;
        o === "system" && s && (r = E());
        let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = (g)=>{
            g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
        };
        if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
            let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
            P.style.colorScheme = D;
        }
        C == null || C();
    }, [
        p
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = typeof o == "function" ? o(c) : o;
        n(r);
        try {
            localStorage.setItem(m, r);
        } catch (v) {}
    }, [
        c
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = E(o);
        y(r), c === "system" && s && !e && S("system");
    }, [
        c,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let o = window.matchMedia(I);
        return o.addListener(A), A(o), ()=>o.removeListener(A);
    }, [
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let o = (r)=>{
            r.key === m && (r.newValue ? n(r.newValue) : f(l));
        };
        return window.addEventListener("storage", o), ()=>window.removeEventListener("storage", o);
    }, [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        S(e != null ? e : c);
    }, [
        e,
        c
    ]);
    let Q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            theme: c,
            setTheme: f,
            forcedTheme: e,
            resolvedTheme: c === "system" ? T : c,
            themes: s ? [
                ...a,
                "system"
            ] : a,
            systemTheme: s ? T : void 0
        }), [
        c,
        f,
        e,
        T,
        s,
        a
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](x.Provider, {
        value: Q
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](_, {
        forcedTheme: e,
        storageKey: m,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: d,
        themes: a,
        nonce: p,
        scriptProps: R
    }), w);
}, _ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w })=>{
    let p = JSON.stringify([
        s,
        i,
        a,
        e,
        h,
        l,
        u,
        m
    ]).slice(1, -1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("script", {
        ...w,
        suppressHydrationWarning: !0,
        nonce: ("TURBOPACK compile-time truthy", 1) ? d : "TURBOPACK unreachable",
        dangerouslySetInnerHTML: {
            __html: `(${M.toString()})(${p})`
        }
    });
}), H = (e, i)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    let s;
}, W = (e)=>{
    let i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(i);
        }, 1);
    };
}, E = (e)=>(e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3ff4068d._.js.map