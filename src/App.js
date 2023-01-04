import { Canvas } from '@react-three/fiber';
import { Fog } from 'three';
import Experience from './Experience';

export default function App() {
    return (
        <>
            <Canvas
                shadows
                camera={{
                    fov: 70,
                    near: 0.1,
                    far: 200,
                    position: [-3, 1.5, 4],
                }}
            >
                <Experience position={[0, 0, 0]} />
            </Canvas>
        </>
    );
}
