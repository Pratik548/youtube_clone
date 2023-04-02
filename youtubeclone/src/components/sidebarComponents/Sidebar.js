import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './sidebarRow/SidebarRow';

function Sidebar(){
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={HomeIcon} title='Home' />
            <SidebarRow Icon={WhatshotIcon} title='Trending' />
            <SidebarRow Icon={SubscriptionsIcon} title='Subscription' />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title='Library' />
            <SidebarRow Icon={HistoryIcon} title='History' />
            <SidebarRow Icon={OndemandVideoIcon} title='Your videos' />
            <SidebarRow Icon={WatchLaterIcon} title='Watch later' />
            <SidebarRow Icon={ThumbUpIcon} title='Liked vides' />
            <hr />
        </div>
    )
}

export default Sidebar;