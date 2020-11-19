import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/> FILTER
            </div>
            <hr/>

            <ChannelRow
            image="https://yt3.ggpht.com/a/AATXAJxm-m50k1df64kSXBqW9k5AVmpropl_-UplP7SE2Ho=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Marvel Entertainment"
            verified
            subs="14.4M"
            noOfVideos="7,019"
            description="Marvel Entertainment, a Wholly-owned subsidiary of the Walt Disney Company, is onw of the Wolrd's most prominent ..."
            />
            <hr/>

            <VideoRow 
            views="63K"
            subs="659K"
            description="In December in AVENGERS #40... a new Phoenix will take flight. ▻ Subscribe to Marvel: http://bit.ly/WeO3YJ Follow Marvel on ..."
            timestamp="59 seconds ago"
            channel="Marvel Entertainment"
            title="AVENGERS: ENTER THE PHOENIX TRAILER | Marvel Comics"
            image="https://i.ytimg.com/an_webp/O4fETEZxuww/mqdefault_6s.webp?du=3000&sqp=COih2f0F&rs=AOn4CLB33Ra9cDr_KgHTWv1greZE04bDbQ"
            />
            <VideoRow 
            views="63K"
            subs="659K"
            description="In December in AVENGERS #40... a new Phoenix will take flight. ▻ Subscribe to Marvel: http://bit.ly/WeO3YJ Follow Marvel on ..."
            timestamp="59 seconds ago"
            channel="Marvel Entertainment"
            title="AVENGERS: ENTER THE PHOENIX TRAILER | Marvel Comics"
            image="https://i.ytimg.com/an_webp/O4fETEZxuww/mqdefault_6s.webp?du=3000&sqp=COih2f0F&rs=AOn4CLB33Ra9cDr_KgHTWv1greZE04bDbQ"
            />
            <VideoRow 
            views="63K"
            subs="659K"
            description="In December in AVENGERS #40... a new Phoenix will take flight. ▻ Subscribe to Marvel: http://bit.ly/WeO3YJ Follow Marvel on ..."
            timestamp="59 seconds ago"
            channel="Marvel Entertainment"
            title="AVENGERS: ENTER THE PHOENIX TRAILER | Marvel Comics"
            image="https://i.ytimg.com/an_webp/O4fETEZxuww/mqdefault_6s.webp?du=3000&sqp=COih2f0F&rs=AOn4CLB33Ra9cDr_KgHTWv1greZE04bDbQ"
            />
            <VideoRow 
            views="63K"
            subs="659K"
            description="In December in AVENGERS #40... a new Phoenix will take flight. ▻ Subscribe to Marvel: http://bit.ly/WeO3YJ Follow Marvel on ..."
            timestamp="59 seconds ago"
            channel="Marvel Entertainment"
            title="AVENGERS: ENTER THE PHOENIX TRAILER | Marvel Comics"
            image="https://i.ytimg.com/an_webp/O4fETEZxuww/mqdefault_6s.webp?du=3000&sqp=COih2f0F&rs=AOn4CLB33Ra9cDr_KgHTWv1greZE04bDbQ"
            />
            <VideoRow 
            views="63K"
            subs="659K"
            description="In December in AVENGERS #40... a new Phoenix will take flight. ▻ Subscribe to Marvel: http://bit.ly/WeO3YJ Follow Marvel on ..."
            timestamp="59 seconds ago"
            channel="Marvel Entertainment"
            title="AVENGERS: ENTER THE PHOENIX TRAILER | Marvel Comics"
            image="https://i.ytimg.com/an_webp/O4fETEZxuww/mqdefault_6s.webp?du=3000&sqp=COih2f0F&rs=AOn4CLB33Ra9cDr_KgHTWv1greZE04bDbQ"
            />

        </div>
    )
}

export default SearchPage
