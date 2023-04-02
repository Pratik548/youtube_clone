import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
    const [active, setActive] = useState(false)
    return (
        <div className='header'>
            <div className="header__left">
                <MenuIcon />
                <Link to='/'>
                    <img
                        className='header__logo'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png'
                        alt='Youtube'
                    />
                </Link>
            </div>

            <div className="header__center">
                <div className={`header__centerSearchInput ${active ? "selected" : ""}`}>
                    {
                        active ?
                            <SearchIcon className='header__searchbutton__left' />
                            :
                            <>
                            </>
                    }
                    <input type='text' placeholder='Search' onFocus={() => { setActive(true) }} onBlur={() => { setActive(false) }} />
                </div>
                <SearchIcon className='header__searchbutton' />
                <MicIcon className='header__micbutton' />
            </div>

            <div className="header__right">
                <MoreVertIcon />
                <Avatar
                    alt='Pratik S'
                    sx={{ bgcolor: 'orange' }}
                >PS</Avatar>
            </div>
        </div>
    );
}

export default Header;