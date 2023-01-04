import {
    OrbitControls,
    useHelper,
    Stage,
    BakeShadows,
    softShadows,
    SpotLight,
    PresentationControls,
} from '@react-three/drei';
import { useLoader, useThree } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Model from './LowPolyEarth';
import * as THREE from 'three';

export default function Experience() {
    const { camera, gl } = useThree();
    const ref = useRef();
    // const directionalLight = useRef();
    // useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

    // softShadows({
    //     frustum: 3.75,
    //     size: 0.005,
    //     near: 9.5,
    //     samples: 17,
    //     rings: 11,
    // });

    return (
        <>
            <color args={['#d6c2f9']} attach="background" />
            {/* <OrbitControls camera={camera} /> */}
            <Suspense>
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
                    controls={ref}
                    preset="soft"
                    intensity={0.0002}
                    environment="dawn"
                >
                    <PresentationControls
                        global
                        config={{ mass: 1, tension: 500 }}
                        snap={{ mass: 6, tension: 1500 }}
                        rotation={[0.2, 0, -0.25]}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                    >
                        <Model scale={0.5} rotation-y={3.8} position-x={0} />
                    </PresentationControls>
                </Stage>
            </Suspense>
        </>
    );
}
