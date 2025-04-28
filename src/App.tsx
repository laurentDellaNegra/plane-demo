import { OrbitControls, Float, StatsGl, Svg } from '@react-three/drei'
import { Model } from './Model'
import { Canvas } from '@react-three/fiber'
import { Sky } from './Sky'

export default function App() {
    return (
        <Canvas camera={{ position: [-40, 10, 120], fov: 50, far: 100000 }}>
            <Sky />
            <StatsGl />

            <Float rotationIntensity={1} position={[-40, 0, 0]}>
                <Model />
                {/* <Text
                    scale={10}
                    fontSize={1}
                    position={[30, 20, -10]}
                    rotation-y={0}
                    textAlign="center"
                    color="blue"
                >
                    SkyScope
                </Text> */}
                <Svg
                    src="logo.svg"
                    scale={0.13}
                    position={[10, 30, -10]}
                    rotation-y={0}
                />
            </Float>
            <OrbitControls makeDefault />
            <ambientLight intensity={Math.PI / 1.5} />
            <spotLight
                position={[0, 40, 0]}
                decay={0}
                distance={45}
                penumbra={1}
                intensity={100}
            />
            <spotLight
                position={[-20, 0, 10]}
                color="red"
                angle={0.15}
                decay={0}
                penumbra={-1}
                intensity={30}
            />
            <spotLight
                position={[20, -10, 10]}
                color="red"
                angle={0.2}
                decay={0}
                penumbra={-1}
                intensity={20}
            />
            {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                <GizmoViewport
                    axisColors={['red', 'green', 'blue']}
                    labelColor="black"
                />
            </GizmoHelper> */}
        </Canvas>
    )
}
