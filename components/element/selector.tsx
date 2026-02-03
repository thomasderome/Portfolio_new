import React from 'react';
import cn from "@/components/element/tailwind_merge"

interface Selector_interface extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Selector({ children, className, ...props }: Selector_interface) {
  return (
    <nav className={cn("mt-1 mb-2 ml-3 flex flex-col h-100 w-40 border-r border-(--color-second)", className)} {...props}>
      {children}
    </nav>
  );
}
