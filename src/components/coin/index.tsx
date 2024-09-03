import { useSphere } from '@react-three/cannon';
import { Mesh, Color} from 'three';

const Coin = () => {
    const [ref] = useSphere<Mesh>(() => ({
        mass: 1,
        position: [Math.random() * 4 - 2, 5, 0],
        args: [0.4],
    }));
    const color = new Color('rgb(255, 227, 101)')
    
    return (
        <mesh ref={ref} castShadow>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

export default Coin;
