import React from 'react';

interface Button_interface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button_select({ children, ...props }: Button_interface) {
  return (
    <button className="mr-2 h-10 w-full hover:bg-(--color-font) hover:text-black" {...props}>
      {children}
    </button>
  );
}
