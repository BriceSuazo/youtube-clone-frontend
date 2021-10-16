import './videoInfo.css';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const VideoInfo = () => {
    return (
        <div className="VideoInfo">
            <div className="video-info-top">
                <div className="video-hashtags">
                    <a href="/" className="video-hashtag">#BriceSuazo</a>
                    <a href="/" className="video-hashtag">#PogiMoTalagaBrice</a>
                    <a href="/" className="video-hashtag">#AnakanMoPoAkoBriceSuazo</a>
                </div>
                <span className="video-title">Brice Suazo Malupet 100% Real na Real Title ito</span>
                <div className="video-info-center">
                    <div className="video-info-number">
                        <span className="video-views">69,420 views</span>•
                        <span className="video-date-uploaded">Oct 16, 2021</span>
                    </div>
                    <div className="video-share">
                        <div className="video-reaction-ratio">
                            <div className="video-like-container">
                                <ThumbUpAltOutlinedIcon />
                                <span className="video-like-count">69K</span>
                            </div>
                            <div className="video-dislike-container">
                                <ThumbDownAltOutlinedIcon />
                                <span className="video-dislike-count">1K</span>
                            </div>
                        </div>
                        <div className="video-share-container">
                            <IosShareOutlinedIcon />
                            <span className="video-share-text">SHARE</span>
                        </div>
                        <div className="video-save-container">
                            <AddCircleOutlineOutlinedIcon />
                            <span className="video-save-text">SAVE</span>
                        </div>
                        <MoreHorizOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className="video-info-bottom">
                <img src="https://yt3.ggpht.com/7WdX-cflWvM1AQeqQsib51WqrPi-QHl7970vrcWUe7h-_pZMXDqGnBvuaEBsINaLSnZYsLRKEA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="uploader-profile-pic"/>
                <div className="video-info-container">
                    <div className="uploader-info">
                        <div className="uploader-info-text">
                            <span className="uploader-name">Brice Suazo</span>
                            <span className="uploader-sub-count">69.0K subscribers</span>
                        </div>
                        <div className="video-sub-container">
                            <span className="video-sub-button">SUBSCRIBED</span>
                            <NotificationsOutlinedIcon />
                        </div>
                    </div>
                    <div className="video-description-container">
                        <span className="video-description">
                        What's happening in the thumbnail? Tell me in the comments. Wrong answers only.<br/><br/>
                        -------------------------------------------------
                        </span>
                        <span className="video-description-showmore">SHOW MORE</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoInfo