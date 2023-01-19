import {
    Loader,
    OrbitControls,
    Scroll,
    ScrollControls,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import Cards from './Cards';

export default function App() {
    return (
        <>
            <Canvas
                shadows
                camera={{
                    fov: 40,
                    position: [0, 1.5, 2.2],
                }}
            >
                <color args={['#d6c2f9']} attach="background" />
                <ScrollControls pages={3}>
                    <Experience />

                    <Scroll></Scroll>

                    <Scroll html style={{ width: '100%' }}>
                        <div className="header">
                            <h1>
                                Create{' '}
                                <span style={{ fontSize: '0.4em' }}>with</span>
                                <br />
                                <span>Thierry</span>
                            </h1>
                        </div>
                        <div
                            className="current"
                            style={{ position: 'absolute', top: '100vh' }}
                        >
                            <h2 className="title-left">current.projects</h2>

                            <div className="container left">
                                <Cards title={1}></Cards>
                                <Cards title={2} link={'www.host.ch'}></Cards>
                                <Cards title={4}></Cards>
                                <Cards title={4}></Cards>
                            </div>
                        </div>

                        <div
                            className="old"
                            style={{ position: 'absolute', top: '200vh' }}
                        >
                            <h2 className="title-right">old.projects</h2>

                            <div className="container right">
                                <Cards title={1}></Cards>
                                <Cards title={2} link={'www.host.ch'}></Cards>
                                <Cards title={4}></Cards>
                            </div>
                        </div>
                    </Scroll>
                </ScrollControls>
            </Canvas>
            <Loader />
        </>
    );
}
