"use client";
import React, {ComponentType} from "react";

import { Pages } from "./page_data";
import Button from "@/components/element/button";
import Selector from "@/components/element/selector";

export default function Main_Frame() {
    const [Page_render, set_page_render] = React.useState<ComponentType >(() => Pages[0].element);

    return (
        <div className="cathodic_effect flex flex-col text-xl text-(--color-font) ml-2 mr-2 max-w-[140vh]
                after:content-['']
                after:absolute
                after:inset-0
                after:pointer-events-none">
            <div className="flex">
                <span>╔</span>
                <span>═══</span>
                <span className="pl-1 pr-1">Tefdsfsfxt</span>
                <span className="overflow-hidden max-w-220">═══════════════════════════════════════════════════════════════════════════════════════════════════</span>
                <span>╗</span>
            </div>
            <div className="flex bg-(--bg-terminal) ml-1 max-w-259 mr-1" >
                <Selector>
                    {Pages.map((menu) => {
                        return (
                            <Button key={menu.name}
                                           onClick={() => set_page_render(() => menu.element)}
                            >
                                {menu.name}
                            </Button>
                        );
                    })}
                </Selector>
                <div>
                    <Page_render/>
                </div>
            </div>
        </div>
    );
}