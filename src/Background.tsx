import { Environment } from '@react-three/drei'
import { useControls } from 'leva'

const DEFAULT_ENV_SETTINGS = {
    x: 0,
    y: 0,
    z: 0,
    background: false,
    blur: 0,
    near: 1,
    far: 100,
    resolution: 256,
    groundHeight: 100,
    groundRadius: 4000,
    groundScale: 300,
}

export default function Background() {
    const controls = useControls('Environment', {
        x: {
            value: DEFAULT_ENV_SETTINGS.x,
            min: -1000,
            max: 1000,
            step: 1,
        },
        y: {
            value: DEFAULT_ENV_SETTINGS.y,
            min: -1000,
            max: 1000,
            step: 1,
        },
        z: {
            value: DEFAULT_ENV_SETTINGS.z,
            min: -1000,
            max: 1000,
            step: 1,
        },
        background: { value: DEFAULT_ENV_SETTINGS.background },
        blur: {
            value: DEFAULT_ENV_SETTINGS.blur,
            min: 0,
            max: 1,
            step: 0.01,
        },
        near: {
            value: DEFAULT_ENV_SETTINGS.near,
            min: 0.1,
            max: 10,
            step: 0.1,
        },
        far: {
            value: DEFAULT_ENV_SETTINGS.far,
            min: 10,
            max: 1000,
            step: 1,
        },
        resolution: {
            value: DEFAULT_ENV_SETTINGS.resolution,
            min: 64,
            max: 2048,
            step: 16,
        },
        groundHeight: {
            value: DEFAULT_ENV_SETTINGS.groundHeight,
            min: 10,
            max: 1000,
            step: 10,
        },
        groundRadius: {
            value: DEFAULT_ENV_SETTINGS.groundRadius,
            min: 10,
            max: 1000,
            step: 10,
        },
        groundScale: {
            value: DEFAULT_ENV_SETTINGS.groundScale,
            min: 10,
            max: 1000,
            step: 10,
        },
    })

    return (
        <group position={[controls.x, controls.y, controls.z]}>
            <Environment
                files="./sky.hdr"
                // ground={{ height: 100, radius: 40000, scale: 200 }}
                background={controls.background}
                blur={controls.blur}
                near={controls.near}
                far={controls.far}
                resolution={controls.resolution}
                ground={{
                    height: controls.groundHeight,
                    radius: controls.groundRadius,
                    scale: controls.groundScale,
                }}
            />
        </group>
    )
}
