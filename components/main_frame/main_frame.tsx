import React, { ComponentType } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useGetTranslation } from '@/hooks/translation';

import { Pages } from '@/data/page_data';
import Button from '@/components/element/button';
import Selector from '@/components/element/selector';

export default function Main_Frame() {
    const isMobile = useIsMobile();
    const translation = useGetTranslation();

    const [Page_render, set_page_render] = React.useState<ComponentType>(() => Pages[0].element);
    const [Hover_button, set_hover] = React.useState(0);

    return (
        <div className="cathodic_effect mr-2 ml-2 flex max-w-[140vh] flex-col text-xl text-(--color-font) after:pointer-events-none after:absolute after:inset-0 after:content-['']">
            <div className="flex">
                <span>╔</span>
                <span>═══</span>
                <span className="pr-1 pl-1">Portfolio</span>
                <span className="max-w-217 overflow-hidden">
                    ═══════════════════════════════════════════════════════════════════════════════════════════════════
                </span>
                <span>╗</span>
            </div>
            <div className={`mr-1 ml-1 max-w-259 bg-(--bg-terminal) ${isMobile ? '' : 'flex'}`}>
                <Selector className={'pr-2.5'} ismobile={isMobile}>
                    {Pages.map((menu, index) => {
                        return (
                            <Button
                                key={menu.name}
                                onClick={() => {
                                    set_page_render(() => menu.element);
                                    set_hover(index);
                                }}
                                className={`mb-2 ${index === Hover_button ? 'active_hbutton' : ''}`}
                                ismobile={isMobile}
                            >
                                {translation?.navigation[menu.name]}
                            </Button>
                        );
                    })}
                </Selector>
                <div>
                    <Page_render />
                </div>
            </div>
            <div className={'flex'}>
                <span>╚</span>
                <span className="max-w-255 overflow-hidden">
                    ═══════════════════════════════════════════════════════════════════════════════════════════════════
                </span>
                <span>╝</span>
            </div>
        </div>
    );
}
