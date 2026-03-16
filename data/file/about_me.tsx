import React from 'react';
import { useGetTranslation } from '@/hooks/translation';

export default function About_me() {
    const translation = useGetTranslation();

    const birthDate = new Date('09/02/2007');
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();

    if (
        now.getMonth() < birthDate.getMonth() ||
        (now.getMonth() == birthDate.getMonth() && now.getDate() < birthDate.getDate())
    )
        age--;

    return (
        <div className={'flex max-w-170 flex-col'}>
            <h1 className={'text-2xl font-bold'}>
                &gt; Thomas_Derome<span className={'blink text-xl'}>█</span>
            </h1>
            <div>
                <span className={'text-sm'}>{translation?.about_me?.presentation}</span>
            </div>
        </div>
    );
}
