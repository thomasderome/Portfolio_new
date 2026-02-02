import React from 'react';

interface Card_interface extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, ...props }: Card_interface) {
  return <div {...props}>{children}</div>;
}
