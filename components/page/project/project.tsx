import React, { useState, useEffect } from 'react';
import Card from '@/components/element/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { project_list } from '@/data/project';

export default function Project() {
    const default_lang = 'fr';
    const is_mobile = useIsMobile();

    const [lang_select, setLangSelect] = useState(default_lang);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setLangSelect(params.get('lang') ?? default_lang);
    }, []);

    return (
        <Card
            className={`ml-3 flex h-120 w-220 flex-col overflow-y-scroll border-none ${is_mobile ? 'max-h-135 max-w-170' : ''}`}
        >
            <div className="flex flex-col gap-6">
                {project_list.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col border border-(--color-second) px-2 py-6"
                    >
                        <div className="flex gap-2">
                            <span className="text-xl opacity-50">{project.icon}</span>
                            <h2 className="text-xl font-bold uppercase">{project.title}</h2>
                        </div>
                        <div className="mt-2 ml-1 border-l-2 border-(--color-second) pl-4">
                            <p className="text-sm leading-relaxed text-(--color-font) opacity-85">
                                {project.description[lang_select] ?? project.description.fr}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="border border-(--color-second) px-2 py-0.5 text-xs uppercase"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4 flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="px-1 py-1 text-sm hover:bg-(--color-font) hover:text-black"
                                    >
                                        &gt; GITHUB
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        className="px-1 py-1 text-sm hover:bg-(--color-font) hover:text-black"
                                    >
                                        &gt; DEMO
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
