import './leftNavigation.css';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

const LeftNavigation = () => {
    return (
        <div className="leftNavigation">
            <div className="top-button-section">
                <div className="top-section">
                    <a href="/" className="leftNav-btn"><HomeIcon />Home</a>
                    <a href="/" className="leftNav-btn"><ExploreOutlinedIcon />Explore</a>
                    <a href="/" className="leftNav-btn"><SubscriptionsOutlinedIcon />Subscriptions</a>
                </div>
                <div className="bottom-section">
                    <a href="/" className="leftNav-btn"><VideoLibraryOutlinedIcon />Library</a>
                    <a href="/" className="leftNav-btn"><HistoryOutlinedIcon />History</a>
                    <a href="/" className="leftNav-btn"><OndemandVideoOutlinedIcon />Your videos</a>
                    <a href="/" className="leftNav-btn"><WatchLaterOutlinedIcon />Watch later
                    </a><a href="/" className="leftNav-btn"><ThumbUpOutlinedIcon />Liked videos</a>
                    <a href="/" className="leftNav-btn"><KeyboardArrowDownOutlinedIcon />See more</a>
                </div>
            </div>
            <div className="subscription-button-section">
                <h4 className="leftNav-section-header">Subscriptions</h4>
                <a href="/" className="leftNav-btn">
                    <img src="https://yt3.ggpht.com/7WdX-cflWvM1AQeqQsib51WqrPi-QHl7970vrcWUe7h-_pZMXDqGnBvuaEBsINaLSnZYsLRKEA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="leftNav-btn-profile-pic"/>
                    Brice Suazo
                </a>
                <a href="/" className="leftNav-btn">
                    <img src="https://yt3.ggpht.com/7WdX-cflWvM1AQeqQsib51WqrPi-QHl7970vrcWUe7h-_pZMXDqGnBvuaEBsINaLSnZYsLRKEA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="leftNav-btn-profile-pic"/>
                    Brice Suazo
                </a>
                <a href="/" className="leftNav-btn">
                    <img src="https://yt3.ggpht.com/7WdX-cflWvM1AQeqQsib51WqrPi-QHl7970vrcWUe7h-_pZMXDqGnBvuaEBsINaLSnZYsLRKEA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="leftNav-btn-profile-pic"/>
                    Brice Suazo
                </a>
                <a href="/" className="leftNav-btn">
                    <img src="https://yt3.ggpht.com/7WdX-cflWvM1AQeqQsib51WqrPi-QHl7970vrcWUe7h-_pZMXDqGnBvuaEBsINaLSnZYsLRKEA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="leftNav-btn-profile-pic"/>
                    Brice Suazo
                </a>
                <a href="/" className="leftNav-btn">
                    <img src="https://yt3.ggpht.com/7WdX-cflWvM1AQeqQsib51WqrPi-QHl7970vrcWUe7h-_pZMXDqGnBvuaEBsINaLSnZYsLRKEA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="leftNav-btn-profile-pic"/>
                    Brice Suazo
                </a>
                <a href="/" className="leftNav-btn">
                    <img src="https://yt3.ggpht.com/7WdX-cflWvM1AQeqQsib51WqrPi-QHl7970vrcWUe7h-_pZMXDqGnBvuaEBsINaLSnZYsLRKEA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="leftNav-btn-profile-pic"/>
                    Brice Suazo
                </a>
                <a href="/" className="leftNav-btn"><KeyboardArrowDownOutlinedIcon />Show 420 more</a>
            </div>
            <div className="more-button-section">
                <div className="top-section">
                    <h4 className="leftNav-section-header">More from YouTube</h4>
                    <a href="/" className="leftNav-btn"><PlayCircleFilledWhiteOutlinedIcon />YouTube Premium</a>
                    <a href="/" className="leftNav-btn"><LocalMoviesOutlinedIcon />Movies</a>
                    <a href="/" className="leftNav-btn"><SportsEsportsOutlinedIcon />Gaming</a>
                    <a href="/" className="leftNav-btn"><StreamOutlinedIcon />Live</a>
                    <a href="/" className="leftNav-btn"><ShoppingBasketOutlinedIcon />Fashion & Beauty</a>
                    <a href="/" className="leftNav-btn"><SportsBasketballOutlinedIcon />Sports</a>
                </div>
                <div className="bottom-section">
                    <a href="/" className="leftNav-btn"><SettingsOutlinedIcon />Settings</a>
                    <a href="/" className="leftNav-btn"><FlagOutlinedIcon />Report History</a>
                    <a href="/" className="leftNav-btn"><HelpOutlineOutlinedIcon />Help</a>
                    <a href="/" className="leftNav-btn"><FeedbackOutlinedIcon />Send feedback</a>
                </div>
            </div>
            <div className="about-button-section">
                <div className="about-top-section">
                    <a href="/" className="about-section-link">About</a>
                    <a href="/" className="about-section-link">Press</a>
                    <a href="/" className="about-section-link">Copyright</a>
                    <a href="/" className="about-section-link">Contact us</a>
                    <a href="/" className="about-section-link">Creators</a>
                    <a href="/" className="about-section-link">Advertise</a>
                    <a href="/" className="about-section-link">Developers</a>
                </div>
                <div className="about-bottom-section">
                    <a href="/" className="about-section-link">Terms</a>
                    <a href="/" className="about-section-link">Privacy</a>
                    <a href="/" className="about-section-link">Policy & Safety</a>
                    <a href="/" className="about-section-link">How YouTube works</a>
                    <a href="/" className="about-section-link">Test new features</a>
                </div>

                <span className="about-copyright">© 2021 Google LLC</span>
            </div>
        </div>
    )
}

export default LeftNavigation
