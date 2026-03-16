'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Model from "./model";

function load() {
    return <center><span >Loading ...</span></center>
}

export default function App() {
    return (
        <div className="w-full h-[600px] flex relative top-5">
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
