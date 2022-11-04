import { FunctionComponent, PropsWithChildren } from "react";
import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
interface SidebarProps {
    
}
 
const Sidebar: FunctionComponent<SidebarProps> = (Props:SidebarProps) => {
    return (
      <>
        <div className='Sidebar'>
          {/* Twitter icon */}
          <TwitterIcon className="sidebar_twitericon" />
          <SidebarOption active={true} Icon={HomeIcon} text='Home' />
          <SidebarOption active={false} Icon={SearchIcon} text='Explore' />
          <SidebarOption
            active={false}
            Icon={NotificationsNoneIcon}
            text='Notifications'
          />
          <SidebarOption active={false} Icon={MailOutlineIcon} text='Messages' />
          <SidebarOption
            active={false}
            Icon={BookmarkBorderIcon}
            text='Bookmarks'
          />
          <SidebarOption active={false} Icon={ListAltIcon} text='Lists' />
          <SidebarOption active={false} Icon={PermIdentityIcon} text='Profile' />
          <SidebarOption active={false} Icon={MoreHorizIcon} text='More' />
          {/* sidebaroption */}
                {/* Button->tweet */}
                <Button variant="outlined" className="sidebar__tweet" fullWidth>
                   Tweet
                </Button>
               
               
        </div>
      </>
    );
}
 
export default Sidebar;