'use client';

import Main_Frame from '@/components/main_frame/main_frame';
import { Suspense } from 'react';

export default function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Main_Frame />
        </Suspense>
    );
}
