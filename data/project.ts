export default interface project_interface {
    icon: string;
    title: string;
    description: Record<string, string>;
    tech: string[];

    github: string | null;
    img: string[] | null;
    demo: string | null;
}

export const project_list: project_interface[] = [
    {
        icon: '[✓]',
        title: 'E-Todo',
        description: {
            fr: 'Une solution de gestion de tâches collaborative, permettant le partage de listes en temps réel avec gestion des permissions.',
            en: 'A collaborative task management solution, allowing real-time list sharing with permission management.',
        },
        tech: ['Next.js', 'Express JS', 'TS/JS'],
        github: 'https://github.com/EpitechBachelorPromo2028/B-WEB-101-NCE-1-1-etodo-3/tree/main',
        img: [],
        demo: null,
    },
    {
        icon: '[-IENT-]',
        title: 'IENT Mobile',
        description: {
            fr: "Une application mobile exploitant l'API d'un ENT pour extraire des données et offrir une interface utilisateur.",
            en: "A mobile app that uses an ENT's API to extract data and provide a user interface.",
        },
        tech: ['Flutter', 'Dart'],
        github: 'https://github.com/thomasderome/IENT_Mobile',
        img: [],
        demo: null,
    },
    {
        icon: '📖',
        title: 'Alice in wonderland',
        description: {
            fr: "Un outil d'analyse littéraire basé sur le NLP pour extraire des statistiques (entités, thématiques, diversité lexicale) du Projet Gutenberg, doté d'une interface TUI en Rust.",
            en: 'A NLP-based literary analysis tool to extract statistics (entities, topics, lexical diversity) from Project Gutenberg, featuring a Rust-powered TUI.',
        },
        tech: ['Python', 'Rust', 'Ratatui', 'NLP', 'Docker', 'Redis'],
        github: 'https://github.com/thomasderome/Alice-in-wonderland',
        img: [],
        demo: null,
    },
    {
        icon: '|-[=o=]',
        title: 'Radio stream',
        description: {
            fr: 'Un projet de serveur de streaming permettant de diffuser des radios web sur un ordinateur distant et de les piloter via une interface de contrôle web.',
            en: 'A streaming server project that allows web radio stations to be streamed to a remote computer and controlled via a web interface.',
        },
        tech: ['Flask', 'Python', 'HTML/CSS', 'JS'],
        github: 'https://github.com/thomasderome/Stream-radio',
        img: [],
        demo: null,
    },
];
