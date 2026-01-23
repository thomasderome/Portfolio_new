"use client";
import React from "react";

export default function Main_Frame() {
    return (
        <div className="relative flex flex-col text-xl text-(--color-font) ml-2 mr-2 max-w-[140vh]
                after:content-['']
                after:absolute
                after:inset-0
                after:pointer-events-none">
            <style>{`
                .relative::after {
                    background: 
  /* Lignes horizontales */
  repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.3) 0px,
    rgba(0, 0, 0, 0.3) 1px,
    transparent 1px,
    transparent 2px
  );
                }`}</style>
            <div className="flex">
                <span>╔</span>
                <span>═══</span>
                <span className="pl-1 pr-1">Tefdsfsfxt</span>
                <span className="overflow-hidden max-w-220">═══════════════════════════════════════════════════════════════════════════════════════════════════</span>
                <span>╗</span>
            </div>
            <div className="flex bg-(--bg-terminal) ml-1 max-w-259 mr-1" >
                <Selector>
                    <Button_select>Accueil</Button_select>
                </Selector>
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

function Button_select( { children } : Readonly<{ children: React.ReactNode; }>) {
    return (
        <button className="hover:bg-(--color-font) hover:text-black h-10 mr-2 w-full">{children}</button>
    );
}