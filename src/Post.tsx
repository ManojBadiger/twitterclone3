import { FunctionComponent } from "react";
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import './Post.css'
interface PostProps {
    avatar: string,
    name: string,
    by: string,
    desc: string,
    img:string
}

const Post: FunctionComponent<PostProps> = (props:PostProps) => {
    return (
      <div className='post'>
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

                                <span className='post_headerspecial'>@
                                    {
                                    props.by}</span>
                </span>
              </h3>
            </div>
            <div className='post_headerdescription'>
                        <p>{ props.desc}</p>
            </div>
          </div>
          <img
            alt='post'
            src={props.img}
          />
          <div className='post_footer'>
            <ChatBubbleOutlineIcon fontSize='small' />
            <RepeatIcon fontSize='small' />
            <FavoriteBorderIcon fontSize='small' />
            <PublishIcon fontSize='small' />
          </div>
        </div>
      </div>
    );
}
 
export default Post;