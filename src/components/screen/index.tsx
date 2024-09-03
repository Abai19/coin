import { useBox } from '@react-three/cannon';
import { Mesh } from 'three';
import { Component } from './types';

const Screen: Component = () => {
    // left
    const [leftWallRef] = useBox<Mesh>(() => ({
        type: 'Static',
        position: [-2.1, 0, 0],
        args: [0.1, 5, 1],
    }));

    //right
    const [rightWallRef] = useBox<Mesh>(() => ({
        type: 'Static',
        position: [2.1, 0, 0],
        args: [0.1, 5, 1],
    }));

    // bottom
    const [bottomWallRef] = useBox<Mesh>(() => ({
        type: 'Static',
        position: [0, -2.1, 0],
        args: [4.2, 0.1, 1],
    }));

    return (
        <>
            <mesh ref={leftWallRef} receiveShadow>
                <boxGeometry args={[0.1, 5, 1]} />
                <meshStandardMaterial color="transparent" />
            </mesh>
            <mesh ref={rightWallRef} receiveShadow>
                <boxGeometry args={[0.1, 5, 1]} />
                <meshStandardMaterial color="transparent" />
            </mesh>
            <mesh ref={bottomWallRef} receiveShadow>
                <boxGeometry args={[4.2, 0.1, 1]} />
                <meshStandardMaterial color="transparent" />
            </mesh>
        </>
    );
};

export default Screen;
