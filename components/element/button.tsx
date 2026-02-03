import React from 'react';
import cn from '@/components/element/tailwind_merge';

interface Button_interface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button_select({ children, className, ...props }: Button_interface) {
  return (
    <button
      className={cn(`mr-2 h-10 w-full hover:bg-(--color-font) hover:text-black`, className)}
      {...props}
    >
      {children}
    </button>
  );
}
