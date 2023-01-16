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
                    {/* <PresentationControls
                    config={{ mass: 1, tension: 500 }}
                    snap={{ mass: 6, tension: 1500 }}
                    rotation={[0.2, 3.6, -0.25]}
                    polar={[0, Math.PI / 4]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                > */}
                    <OrbitControls
                        camera={camera}
                        enableDamping={true}
                        enablePan={true}
                        screenSpacePanning={false}
                        minDistance={1.5}
                        maxDistance={5}
                    />
                    <Model scale={1} />
                    {/* </PresentationControls> */}
                </Stage>
            </Suspense>
        </>
    );
}
