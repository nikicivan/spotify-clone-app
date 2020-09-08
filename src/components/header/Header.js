import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateProviderValue } from '../../contextAPI/stateProvider';

const Header = () => {

    const [{user}] = useStateProviderValue();

    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input placeholder="search for Artists or Songs" type="text"/>
            </div>
            <div className="header-right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
