import { Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';

export default function App() {
    return (
        <>
            <Canvas
                shadows
                camera={{
                    fov: 80,
                    position: [0, 1.5, 2.2],
                }}
            >
                <color args={['#d6c2f9']} attach="background" />

                <Experience />
            </Canvas>
            <Loader />
        </>
    );
}
