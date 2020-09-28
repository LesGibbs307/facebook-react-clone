import React, { Component } from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton, Icon } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                         alt=""
                    />
                    <div className="header__input">
                        <SearchIcon/>  
                        <input type="text" placeholder="Search Facebook"/>
                    </div>
                </div>
                <div className="header__center">
                    <div className="header__option header__option--active">
                        <HomeIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <FlagIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <SubscriptionsOutlinedIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <StorefrontOutlinedIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <SupervisedUserCircleIcon fontSize="large" />
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__info">
                        <Avatar />
                        <h4>iamjohniii</h4>
                    </div>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>
        );
    }
}

export default Header;