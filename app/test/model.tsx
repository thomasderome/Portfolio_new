import React, { useLayoutEffect, useMemo, useRef } from 'react';
import { useGLTF, BoxHelper } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Model() {
    const { scene } = useGLTF('/model/scene.gltf');
    const { camera } = useThree();
    const meshRef = useRef();

    const proxy = useMemo(() => {
        console.log('--- Debug Modèle ---');
        console.log('Scène entière:', scene);
        
        const box = new THREE.Box3().setFromObject(scene);
        const size = new THREE.Vector3();
        box.getSize(size);
        console.log('Taille réelle du modèle (avant scale):', size);
        console.log('Centre du modèle:', box.getCenter(new THREE.Vector3()));

        const finalProxy = scene.getObjectByName('camera');
        return finalProxy;
    }, [scene]);

    const worldPos = useMemo(() => new THREE.Vector3(), []);
    const worldQuat = useMemo(() => new THREE.Quaternion(), []);

    const syncCamera = () => {
        if (proxy) {
            proxy.updateWorldMatrix(true, false);
            proxy.getWorldPosition(worldPos);
            proxy.getWorldQuaternion(worldQuat);

            camera.position.copy(worldPos);
            camera.quaternion.copy(worldQuat);
        }
    };

    useLayoutEffect(() => {
        syncCamera();
    }, [proxy, camera]);

    useFrame(() => {
        syncCamera();
    });

    return (
        <group>
            <primitive object={scene} scale={16} />
        </group>
    );
}

useGLTF.preload('/model/scene.gltf');
