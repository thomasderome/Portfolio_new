import { useEffect, useState } from 'react';
import fr from '@/public/i18n/fr.json';

export function useGetTranslation(): Record<string, any> | null {
    const default_lang = 'fr';

    const [lang_select, setLangSelect] = useState(default_lang);
    const [traduction, setTraduction] = useState<Record<string, any> | null>(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setLangSelect(params.get('lang') ?? default_lang);
    }, []);

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
