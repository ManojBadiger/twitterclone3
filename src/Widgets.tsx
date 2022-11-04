import { FunctionComponent } from "react";
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import Twitter from "@mui/icons-material/Twitter";
import PublishIcon from '@mui/icons-material/Publish';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
}
from 'react-twitter-embed'
interface WidgetsProps {
 avatar: string,
    name: string,
    by: string,
    desc: string,
    img: string,
    timings:string
}
 
const Widgets: FunctionComponent<WidgetsProps> = (props:WidgetsProps) => {
    return (
      <div className='widgets'>
        <div className='widgets_input'>
          <SearchIcon className='widgets_searchIcon' />
          <input placeholder='Search Twitter' type='text' />
        </div>
        <div className='widgets_container'>
                <h2>What's Happening</h2>
                <br/>
          {/* <TwitterTweetEmbed tweetId={'858551177860055040'} />
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='Manoj'
            options={{ height: 400 }}
          />
          <TwitterShareButton
            url={'https://www.shutterstock.com/search/excited'}
            options={{ text: '#reactjs is awesome', via: 'Manoj ' }}
          /> */}
        </div>
        <div className='postw'>
          <div className='post_avatar'>
            <Avatar src={props.avatar} />
          </div>
          <div className='post_body'>
            <div className='post_header'>
              <div className='post_headertext'>
                <h3>
                  {props.name}
                  <span>
                    <VerifiedIcon className='post_badge' />
                  </span>
                  <br />
                  <span className='post_headerspecial'>@{props.by}</span>
                </h3>
              </div>
              <div className='post_headerdescription'>
                <p>{props.desc}</p>
              </div>
            </div>
            <img alt='post' src={props.img} />
            <p className='timings'>
              {props.timings}

              <ErrorOutlineIcon className='erroroutline' fontSize='small' />
            </p>

            <div className='post_footerw'>
              <FavoriteBorderIcon fontSize='small' />
              <p className='number'>3000</p>

              <ChatBubbleOutlineIcon />
              <p className='number2'>66 people ....</p>
            </div>
          </div>
        </div>
        <div className='postw'>
          <div className='post_avatar'>
            <Avatar src={props.avatar} />
          </div>
          <div className='post_body'>
            <div className='post_header'>
              <div className='post_headertext'>
                <h3>
                  {props.name}
                  <span>
                    <VerifiedIcon className='post_badge' />
                  </span>
                  <br />
                  <span className='post_headerspecial'>@{props.by}</span>
                </h3>
              </div>
              <div className='post_headerdescription'>
                <p>{props.desc}</p>
              </div>
            </div>
            <img alt='post' src={props.img} />
            <p className='timings'>
              {props.timings}

              <ErrorOutlineIcon className='erroroutline' fontSize='small' />
            </p>

            <div className='post_footerw'>
              <FavoriteBorderIcon fontSize='small' />
              <p className='number'>3000</p>

              <ChatBubbleOutlineIcon />
              <p className='number2'>66 people ....</p>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Widgets;