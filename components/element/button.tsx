import React from 'react';
import cn from '@/components/element/tailwind_merge';

interface Button_interface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  ismobile?: boolean;
}

export default function Button_select({ children, className, ismobile, ...props }: Button_interface) {
  return (
    <button
      className={cn(
        `mr-2 h-10 hover:bg-(--color-font) hover:text-black ${ismobile ? 'w-29' : 'w-full'}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
