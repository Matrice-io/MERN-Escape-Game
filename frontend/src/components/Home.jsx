import React from 'react';
import bddesc from '../../../backend/bddesc'; 
import RoomCard from './RoomCard';

const Home = () => {
    return (
        <ul>
            {bddesc.map((room) => (
                <li key={room.name}><RoomCard image={room.img} description={room.description} title={room.name}/></li>
            ))}      
        </ul>
    );
}

export default Home;
