/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sky as SkyImpl, Clouds, Cloud } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { MeshLambertMaterial } from 'three'

export function Sky() {
    const cloud0 = useRef<any>()
    const cloud1 = useRef<any>()

    // Set initial positions
    useEffect(() => {
        cloud0.current.position.x = 0
        cloud1.current.position.x = -1000 // Start the second cloud offset by the bounds
    }, [])

    useFrame((_, delta) => {
        const speed = delta * 20
        const bounds = 1000

        // Move both clouds
        cloud0.current.position.x += speed
        cloud1.current.position.x += speed

        // Reset position when clouds go beyond bounds
        if (cloud0.current.position.x > bounds) {
            cloud0.current.position.x = -bounds
        }
        if (cloud1.current.position.x > bounds) {
            cloud1.current.position.x = -bounds
        }
    })

    return (
        <>
            <SkyImpl distance={450000} sunPosition={[100, 20, 100]} />
            <group>
                <Clouds
                    material={MeshLambertMaterial}
                    limit={4000}
                    range={1000}
                >
                    <Cloud
                        ref={cloud0}
                        concentrate="outside"
                        position={[0, 0, -200]}
                        growth={300}
                        color={'#ffffff'}
                        // color={'red'}
                        opacity={1.25}
                        seed={4}
                        bounds={500}
                        volume={200}
                    />
                    <Cloud
                        ref={cloud1}
                        concentrate="outside"
                        position={[0, 0, -200]}
                        growth={300}
                        // color={'yellow'}
                        color={'#ffffff'}
                        opacity={1.25}
                        seed={10} // Different seed for variation
                        bounds={500}
                        volume={200}
                    />
                    <Cloud
                        position={[500, 0, -1000]}
                        concentrate="outside"
                        growth={500}
                        color={'#ffffff'}
                        // color={'blue'}
                        opacity={1.25}
                        seed={10} // Different seed for variation
                        bounds={2000}
                        volume={1200}
                    />
                </Clouds>
            </group>
        </>
    )
}
