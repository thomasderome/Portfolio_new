'use client';

import React from 'react';
import { useGetTranslation } from '@/hooks/translation';
import Card from '@/components/element/card';
import DecryptedText from '@/components/effects/DecryptedText';
import {parcour_data} from '@/data/parcour';

export default function Parcour() {
    const translation = useGetTranslation();

    if (!translation) return <div>Loading...</div>;

    return (
        <div className="flex flex-col gap-6 py-4">
            {parcour_data.map((item, index) => (
                <div key={item.id} className="relative flex gap-4">
                    {/* Timeline vertical line */}
                    {index !== parcour_data.length - 1 && (
                        <div className="absolute top-10 bottom-[-24px] left-[15px] w-[2px] bg-(--color-second) opacity-30" />
                    )}
                    
                    {/* Timeline dot */}
                    <div className="z-10 mt-2 flex h-8 w-8 shrink-0 items-center justify-center border border-(--color-second) bg-(--bg-terminal) text-xs">
                        {parcour_data.length - index}
                    </div>

                    <Card className="flex-1 flex-col transition-all hover:translate-x-1 hover:border-(--color-font)">
                        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 border-b border-(--color-second) border-dotted pb-2">
                            <h2 className="text-lg font-bold">
                                {translation?.parcour?.[item.id] || item.id}
                            </h2>
                            <span className="text-sm opacity-70">[{item.date}]</span>
                        </div>
                        <div className="text-sm leading-relaxed">
                            <DecryptedText
                                text={translation?.parcour?.[`${item.id}_desc`] || ''}
                                animateOn="view"
                                revealDirection="start"
                                speed={0.5}
                            />
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
}
