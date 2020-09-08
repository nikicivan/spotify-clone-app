import React from 'react';
import './sidebar.css';
import SidebarOptions from '../sidebar-options/SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateProviderValue } from '../../contextAPI/stateProvider';

const Sidebar = () => {
    const [{ playlists }, dispatch] = useStateProviderValue(); 

    return (
        <div className="sidebar">
            <img className="sidebar-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify_logo"/>
            <SidebarOptions Icon={HomeIcon} title="Home" />
            <SidebarOptions Icon={SearchIcon} title="Search" />
            <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar-title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist, index) => (
                <SidebarOptions key={index} title={playlist.name} />
            
            ))}                            
        </div>
    )
}

export default Sidebar;
