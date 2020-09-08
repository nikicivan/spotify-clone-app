import React from 'react';
import './sidebarOptions.css';

const SidebarOptions = ({ title, Icon }) => {
    return (
        <div className="sidebarOptions">
            {Icon && <Icon className="sidebarOption-icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p> }
        </div>
    )
}

export default SidebarOptions;
