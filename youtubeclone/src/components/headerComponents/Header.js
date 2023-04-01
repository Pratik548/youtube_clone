import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import './Header.css'

function Header(props) {
    return (
        <div>
            <div className='header'>
                <div className="header__left">
                    <MenuIcon />
                    <Link to='/'>
                        <img
                            className='header__logo'
                            src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                            alt=''
                        />
                    </Link>
                </div>

                <div className="header__center">
                    <input type='text' />
                    <SearchIcon className='header__searchbutton' />
                </div>

                <div className="header__right">
                    <VideoCallIcon className='header__icon' />
                    <AppsIcon className='header__icon' />
                    <NotificationsIcon className='header__icon' />
                    <Avatar
                        alt='Nouman Ahmed'
                        stc='https://avatars1.githubusercontent.com/u/35970677?s=60&v=4'
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;