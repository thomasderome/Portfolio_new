import './globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="font-[--font-mono]">
            <body className="antialiased">{children}</body>
        </html>
    );
}
