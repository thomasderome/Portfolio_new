import React from 'react';

interface Selector_interface extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Selector({ children, ...props }: Selector_interface) {
  return (
    <nav className="mt-1 mb-2 ml-3 flex h-100 w-40 border-r border-(--color-second)" {...props}>
      {children}
    </nav>
  );
}
