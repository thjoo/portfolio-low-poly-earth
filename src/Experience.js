import { Stage, PresentationControls, OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import Model from './LowPolyEarth';
import * as THREE from 'three';

export default function Experience() {
    const { camera, gl } = useThree();
    const ref = useRef();

    return (
        <>
            <Suspense fallback={null}>
                <Stage
                    shadows={{
                        type: 'contact',
                        offset: 0.3,
                        normalBias: 0.1,
                        colorBlend: 2,
                        opacity: 1,
                        size: 2048,
                        scale: 5,
                        blur: 5,
                        far: 5,
                    }}
                >
                    <PresentationControls
                        rotation={[0.13, 0.1, 0]}
                        polar={[-1, 0.2]}
                        azimuth={[-1, 0.75]}
                        config={{ mass: 2, tension: 400 }}
                        snap={{ mass: 4, tension: 400 }}
                    >
                        {/* <OrbitControls
                        camera={camera}
                        enableDamping={true}
                        enablePan={true}
                        screenSpacePanning={false}
                        minDistance={1.5}
                        maxDistance={5}
                    /> */}
                        <Model scale={1} />
                    </PresentationControls>
                </Stage>
            </Suspense>
        </>
    );
}
