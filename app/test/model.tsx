import React from 'react';
import { useGLTF, Center } from '@react-three/drei';

export default function Model() {
    const { scene } = useGLTF('/model/scene.gltf');
    return (
        <>
            <ambientLight />
            <Center>
                <primitive object={scene} position={[0, 0, 0]} />
            </Center>
        </>
    );
}

useGLTF.preload('/model/scene.gltf');
