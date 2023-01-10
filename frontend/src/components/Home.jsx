import React from 'react';
import bddesc from '../../../backend/bddesc'; 
import RoomCard from './RoomCard';

const Home = () => {
    return (
        <ul className='home-list'>
            {bddesc.map((room) => (
                <li key={room.name}>
                    <RoomCard 
                        image={room.img} 
                        description={room.description} 
                        title={room.name}
                        id={room.name}/>
                </li>
            ))}
        </ul>
    );
}

export default Home;
