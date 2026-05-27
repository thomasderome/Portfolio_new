'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Button from './button';
import { Suspense } from 'react';

function LanguageSwitcherContent() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentLang = searchParams.get('lang') || 'fr';

    const toggleLanguage = () => {
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        const params = new URLSearchParams(searchParams.toString());
        if (newLang === 'fr') {
            params.delete('lang');
        } else {
            params.set('lang', 'en');
        }

        const queryString = params.toString();
        const url = `${pathname}${queryString ? `?${queryString}` : ''}`;
        router.push(url);
    };

    return (
        <Button onClick={toggleLanguage} className="w-10 px-2 text-sm uppercase rounded-3xl bg-gray-300">
            {currentLang === 'fr' ? 'EN' : 'FR'}
        </Button>
    );
}

export default function LanguageSwitcher() {
    return (
        <Suspense fallback={<Button className="w-10 px-2 text-sm uppercase">...</Button>}>
            <LanguageSwitcherContent />
        </Suspense>
    );
}
