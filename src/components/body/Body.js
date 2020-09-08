import React from 'react';
import './body.css';
import Header from '../header/Header';
import { useStateProviderValue } from '../../contextAPI/stateProvider';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from '../songRow/SongRow';

const Body = ({ spotify }) => {

    const [{discover_weekly}] = useStateProviderValue();

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body-info">
                <img src={discover_weekly?.images[0].url} alt="discover_weekly"/>
                <div className="body-infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body-songs">
                <div className="body-icon">
                    <PlayCircleFilledIcon className="body-shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;
