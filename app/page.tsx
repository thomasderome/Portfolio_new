import Main_Frame from '@/components/main_frame/main_frame';
import { Suspense } from 'react';

export default function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Main_Frame />
            </div>
        </Suspense>
    );
}
