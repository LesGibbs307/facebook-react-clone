import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar(){
    return(
    <div className="sidebar">
        <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />   
        <SidebarRow Icon={VideoLibraryIcon} title="Video" />            
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
    );
}

export default Sidebar;