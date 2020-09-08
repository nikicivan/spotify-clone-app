import React from 'react';
import './player.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Body from '../../components/body/Body';
import Footer from '../../components/footer/Footer';

const Player = ({ spotify }) => {
    return (
        <div className="player">
            <div className="player-body">                
                <Sidebar />
                <Body spotify={spotify}/>
            </div>
            <Footer />
        </div>
    )
}

export default Player;
