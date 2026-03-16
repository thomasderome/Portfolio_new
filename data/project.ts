export default interface project_interface {
    icon: string;
    title: string;
    description: string;
    tech: string[];

    github: string | null;
    img: string[] | null;
    demo: string | null;
}

export const project_list: project_interface[] = [
    {
        icon: '|-[=o=]',
        title: "",
        description: "",
        tech: ["dsdqs"],
        github: "",
        img: [],
        demo: null,
    },
];