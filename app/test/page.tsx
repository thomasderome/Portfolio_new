'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Model from './model';

function load() {
    return (
        <center>
            <span>Loading ...</span>
        </center>
    );
}

export default function App() {
    return (
        <div className="relative top-5 flex h-[600px] w-full">
            <Suspense fallback={load()}>
                <Canvas>
                    <ambientLight intensity={1.5} />
                    <directionalLight />
                    <Model />
                </Canvas>
            </Suspense>
        </div>
    );
}
