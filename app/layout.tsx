import './globals.css';
import Settings from '@/components/settings';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="font-[--font-mono]">
            <body className="antialiased">
                <Settings/>
                {children}
            </body>
        </html>
    );
}
