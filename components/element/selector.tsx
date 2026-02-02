import React from "react";

interface Selector_interface extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Selector( { children, ...props } : Selector_interface) {
    return (
        <nav className="flex w-40 h-100 ml-3 mt-1 border-r border-(--color-second) mb-2" {...props}>
            {children}
        </nav>
    );
}