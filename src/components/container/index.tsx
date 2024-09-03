import { useState } from 'react';
import { Container, Title } from './styles';
import { Component } from './types';
import Coin from '../coin';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Screen from '../screen';

const CoinContainer: Component = () => {
    const [coins, setCoins] = useState<number[]>([]);

    const handleTap = () => {
        if (coins.length >= 50) return; 
        setCoins((prevCoins) => [...prevCoins, Date.now()]);
    };
    
    return (
        <Container onClick={handleTap}>
            <Title>Click to spawn coins!</Title>
            <Canvas>
                <ambientLight intensity={0.5} />
                <Physics>
                    {coins.map((id) => (
                        <Coin key={id} />
                    ))}
                    <Screen />
                </Physics>
            </Canvas>
        </Container>
    );
};

export default CoinContainer;
