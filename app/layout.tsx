'use client'

import './globals.css';
import LanguageSwitcher from '@/components/element/LanguageSwitcher';
import { useIsMobile } from '@/hooks/use-mobile';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const ismobile = useIsMobile();
    return (
        <html lang="fr" className="font-[--font-mono]">
            <head>
                <title>Thomas DEROME</title>
            </head>
            <body className="antialiased">
                <div className={`fixed z-50 ${ismobile ? 'top-1 right-0' : 'top-4 right-3'}`}>
                    <LanguageSwitcher />
                </div>
                {children}
            </body>
        </html>
    );
}
