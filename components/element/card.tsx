import React from 'react';
import cn from '@/components/element/tailwind_merge';

interface Card_interface extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Card({ children, className, ...props }: Card_interface) {
    return (
        <div
            className={cn('flex border-1 border-(--color-second) bg-(--bg-card) p-4', className)}
            {...props}
        >
            {children}
        </div>
    );
}
