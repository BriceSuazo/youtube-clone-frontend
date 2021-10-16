import './contentThumbnail.css';
import VerifiedIcon from '@mui/icons-material/Verified';

const ContentThumbnail = () => {
    return (
        <div className="ContentThumbnail">
            <a href="/" className="content-wrapper">
                <img src="https://img.youtube.com/vi/zbvKRl0ZKSU/maxresdefault.jpg" alt="" className="content-thumbnail-img"/>
                <div className="content-info">
                    <img src="https://yt3.ggpht.com/7WdX-cflWvM1AQeqQsib51WqrPi-QHl7970vrcWUe7h-_pZMXDqGnBvuaEBsINaLSnZYsLRKEA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="content-thumbnail-profile-pic"/>
                    <div className="content-info-texts">
                        <span className="content-thumbnail-title">Brice $uazo covers "Ikaw" (Yeng Constantino) LIVE on Wish 107.5 Bus</span>
                        <div className="content-thumbnail-uploader">
                            <span className="content-thumbnail-uploader-name">Brice Suazo</span>
                            <VerifiedIcon className="content-thumbnail-uploader-isverified" fontSize="small"/>
                        </div>

                        <div className="content-info-texts-bottom">
                            <span className="content-thumbnail-views">69M views</span>•<span className="content-thumbnail-timeago">10 days ago</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ContentThumbnail
