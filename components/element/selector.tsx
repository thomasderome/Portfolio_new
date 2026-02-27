import React from 'react';
import cn from '@/components/element/tailwind_merge';

interface Selector_interface extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    ismobile: boolean;
}

export default function Selector({ children, className, ismobile, ...props }: Selector_interface) {
    return (
        <nav
            className={cn(
                `mt-1 ml-3 flex border-(--color-second) ${ismobile ? 'overflow-x-scroll overflow-y-hidden border-b' : 'mb-2 h-100 w-33 flex-col border-r'}`,
                className
            )}
            {...props}
        >
            {children}
        </nav>
    );
}
