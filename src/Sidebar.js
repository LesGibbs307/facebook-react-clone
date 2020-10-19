import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import userEvent from '@testing-library/user-event';
import { useStateValue } from "./StateProvider";

const Sidebar =() => {
    const [{user}, dispatch] = useStateValue();
    return(
    <div className="sidebar">
        <SidebarRow 
            src={user.photoURL}
            // src="https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/118657070_10219622914417669_4076078204735283247_o.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=GCd0w8IbP4sAX-ARNdq&_nc_ht=scontent.fatl1-2.fna&_nc_tp=27&oh=f514726249fbf6b47a731a445907f3d3&oe=5F9E4115"
            // title="John Gibson" 
            title={user.displayName}
        />
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