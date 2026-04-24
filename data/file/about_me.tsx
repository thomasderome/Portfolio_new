"use client";

import React from 'react';
import { useGetTranslation } from '@/hooks/translation';
import TextType from '@/components/effects/TextType';
import DecryptedText from '@/components/effects/DecryptedText';

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
            <div className={'text-2xl'}>
                &gt;{' '}
                <TextType
                    text={['Thomas_DEROME']}
                    typingSpeed={100}
                    pauseDuration={5000}
                    showCursor
                    cursorCharacter="█"
                    deletingSpeed={50}
                    cursorBlinkDuration={0.75}
                    loop={false}
                    className='font-[--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace]'
                />
            </div>
            <div>
                <DecryptedText
                    text={translation?.about_me?.presentation ?? 'Loading...'}
                    animateOn="view"
                    revealDirection="start"
                    sequential
                    useOriginalCharsOnly={false}
                    speed={0.7}
                    className='font-[--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace]'
                />
            </div>
        </div>
    );
}
