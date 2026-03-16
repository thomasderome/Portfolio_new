'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import fr from '@/public/i18n/fr.json';

export function useGetTranslation(): Record<string, any> | null {
    const default_lang = 'fr';

    const searchParams = useSearchParams();
    const lang_select = searchParams.get('lang') ?? default_lang;

    const [traduction, setTraduction] = useState<Record<string, any> | null>(null);

    useEffect(() => {
        if (lang_select == default_lang) {
            setTraduction(fr);
            return;
        }

        fetch('/i18n/' + lang_select + '.json')
            .then((response) => response.json())
            .then((translation) => {
                setTraduction(translation);
            })
            .catch(() => {
                console.log('Lang select does not exist');
                setTraduction(fr);
            });
    }, [lang_select]);

    return traduction;
}
