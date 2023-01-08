import { Canvas } from '@react-three/fiber';
import Experience from './Experience';

export default function App() {
    return (
        <>
            <Canvas
                shadows
                camera={{
                    zoom: 1.5,
                    fov: 80,
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
