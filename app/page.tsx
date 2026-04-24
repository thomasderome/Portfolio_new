'use client';

import Main_Frame from '@/components/main_frame/main_frame';
import { Suspense } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Home() {
    const mobile = useIsMobile();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            
            <div
                className={
                    mobile
                        ? ''
                        : 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
                }
            >
                <Main_Frame />
            </div>
        </Suspense>
    );
}
