import * as React from 'react';
import { FunctionComponent } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import './Tweetbox.css'
interface TweetBoxProps {}

const TweetBox: FunctionComponent<TweetBoxProps> = (props: TweetBoxProps) => {
    return (
      <div className='tweetBox'>
        <form action=''>
          <div className='tweetbox_input'>
            <Avatar src='https://i0.wp.com/www.enggwave.com/wp-content/uploads/2017/10/First-American-Logo.png?fit=200200&ssl=1' />
            <input placeholder='Whats happening' type='text' />
          </div>
                <input
                    className='tweetBox_imageurl'
                    placeholder='Optional: Enter image URL' type='text' />
          <Button className='tweetBox_button'>Tweet</Button>
        </form>
      </div>
    );
};

export default TweetBox;
