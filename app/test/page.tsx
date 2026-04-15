import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Grid, OrbitControls } from '@react-three/drei';

import Model from './model';

function Loading() {
    return (
        <div className="flex h-full w-full items-center justify-center bg-gray-900 text-white">
            <span>Chargement du modèle 3D...</span>
        </div>
    );
}

export default function App() {
    return (
        <main className="relative top-5 flex h-150 w-full border border-red-500">
            <Canvas camera={{ far: 10000, fov: 70 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={2} />
                    <pointLight position={[100, 100, 100]} intensity={5} />
                    
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[10, 10, 10]} />
                        <meshStandardMaterial color="red" />
                    </mesh>

                    <Model />
                    
                    <Grid infiniteGrid sectionSize={10} fadeDistance={100} />
                    
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </main>
    );
}
