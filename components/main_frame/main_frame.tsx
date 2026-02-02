"use client";
import * as React from "react";
import { Pages } from "./page_data";
import {ComponentType} from "react";

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
                            <Button_select key={menu.name}
                                           onClick={() => set_page_render(() => menu.element)}
                            >
                                {menu.name}
                            </Button_select>
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

function Selector( { children } : Readonly<{ children: React.ReactNode; }>) {
    return (
        <nav className="flex w-40 h-100 ml-3 mt-1 border-r border-(--color-second) mb-2">
            {children}
        </nav>
    );
}

function Button_select( { children,  onClick} : Readonly<{ children: React.ReactNode; onClick: () => void; }>) {
    return (
        <button className="hover:bg-(--color-font) hover:text-black h-10 mr-2 w-full"
                onClick={onClick}>
            {children}
        </button>
    );
}