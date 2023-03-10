/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF, useMatcapTexture, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
    const { nodes, materials } = useGLTF('./LowPolyEarth_applyedMods1.glb');

    useMatcapTexture;
    const matcapSnowTexture = useTexture('./matcap/stone.png');
    const matcapTreeTexture = useTexture('./matcap/leaves.png');
    const matcapLandTexture = useTexture('./matcap/ground.png');
    const matcapDesertTexture = useTexture('./matcap/wood.png');
    const matcapTrunkTexture = useTexture('./matcap/trunk.png');
    const matcapYellowTexture = useTexture('./matcap/foliage.png');
    const matcapBrassTexture = useTexture('./matcap/brass.png');
    const matcapBlueTexture = useTexture('./matcap/globe.png');
    const matcapMetalTexture = useTexture('./matcap/metal.png');

    const yellowMaterial = new THREE.MeshMatcapMaterial({
        color: new THREE.Color('#ffffff').convertSRGBToLinear(),
        transparent: false,
        opacity: 1,
        matcap: matcapYellowTexture,
    });

    const brassMaterial = new THREE.MeshMatcapMaterial({
        color: new THREE.Color('#ffffff').convertSRGBToLinear(),
        transparent: false,
        opacity: 1,
        matcap: matcapBrassTexture,
    });

    const blueMaterial = new THREE.MeshMatcapMaterial({
        color: new THREE.Color('#ffffff').convertSRGBToLinear(),
        transparent: false,
        opacity: 1,
        matcap: matcapBlueTexture,
    });

    const metalMaterial = new THREE.MeshMatcapMaterial({
        color: new THREE.Color('#ffffff').convertSRGBToLinear(),
        transparent: false,
        opacity: 1,
        matcap: matcapMetalTexture,
    });

    const cloudMaterial = new THREE.MeshMatcapMaterial({
        color: new THREE.Color('#ffffff').convertSRGBToLinear(),
        transparent: true,
        opacity: 0.6,
    });

    const oceanMaterial = new THREE.MeshMatcapMaterial({
        color: new THREE.Color('#D6EFFF').convertSRGBToLinear(),
        transparent: true,
        opacity: 0.9,
    });

    const snowMaterial = new THREE.MeshMatcapMaterial({
        color: new THREE.Color('#ffffff').convertSRGBToLinear(),
        transparent: false,
        opacity: 1,
        matcap: matcapSnowTexture,
    });

    const groundMaterial = new THREE.MeshMatcapMaterial({
        color: new THREE.Color('#ffffff').convertSRGBToLinear(),
        transparent: false,
        opacity: 1,
        matcap: matcapLandTexture,
    });

    const leavesMaterial = new THREE.MeshMatcapMaterial({
        color: new THREE.Color('#ffffff').convertSRGBToLinear(),
        transparent: false,
        opacity: 1,
        matcap: matcapTreeTexture,
    });

    const desertMaterial = new THREE.MeshMatcapMaterial({
        color: new THREE.Color('#ffffff').convertSRGBToLinear(),
        transparent: false,
        opacity: 1,
        matcap: matcapDesertTexture,
    });

    const trunkMaterial = new THREE.MeshMatcapMaterial({
        color: new THREE.Color('#ffffff').convertSRGBToLinear(),
        transparent: false,
        opacity: 1,
        matcap: matcapTrunkTexture,
    });

    const cloudRef = useRef();
    const globeRef = useRef();
    useFrame(({ clock }) => {
        cloudRef.current.rotation.x = -clock.getElapsedTime() / 15;
        cloudRef.current.rotation.y = -clock.getElapsedTime() / 13;
        cloudRef.current.rotation.z = clock.getElapsedTime() / 12;
        globeRef.current.rotation.y = clock.getElapsedTime() / 15;
    });

    return (
        <group ref={globeRef} {...props} dispose={null}>
            <group scale={1.03}>
                <mesh
                    geometry={nodes.Icosphere.geometry}
                    material={oceanMaterial}
                />
                <mesh
                    geometry={nodes.Icosphere_1.geometry}
                    material={snowMaterial}
                />
            </group>
            <mesh
                ref={cloudRef}
                geometry={nodes.Clouds.geometry}
                material={cloudMaterial}
                scale={1.4}
            />
            <mesh geometry={nodes.Sphere.geometry} material={groundMaterial} />
            <mesh geometry={nodes.Sphere_1.geometry} material={snowMaterial} />
            <mesh
                geometry={nodes.Sphere_2.geometry}
                material={desertMaterial}
            />
            <mesh
                geometry={nodes.Sphere_3.geometry}
                material={leavesMaterial}
            />
            <mesh geometry={nodes.Sphere_4.geometry} material={trunkMaterial} />
            <group
                position={[1.08, 0.01, -0.32]}
                rotation={[-3.14, 0, 0.71]}
                scale={0}
            >
                <mesh
                    geometry={nodes.Mesh001.geometry}
                    material={brassMaterial}
                />
                <mesh
                    geometry={nodes.Mesh001_1.geometry}
                    material={brassMaterial}
                />
                <mesh
                    geometry={nodes.Mesh001_2.geometry}
                    material={trunkMaterial}
                />
                <mesh
                    geometry={nodes.Mesh001_3.geometry}
                    material={metalMaterial}
                />
                <mesh
                    geometry={nodes.Mesh001_4.geometry}
                    material={blueMaterial}
                />
                <mesh
                    geometry={nodes.Mesh001_5.geometry}
                    material={yellowMaterial}
                />
            </group>
        </group>
    );
}

useGLTF.preload('./LowPolyEarth_applyedMods1.glb');
