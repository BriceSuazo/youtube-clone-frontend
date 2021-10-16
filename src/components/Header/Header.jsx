import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import AppsIcon from '@mui/icons-material/Apps';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';

const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <MenuIcon className="icon"/>
                <a href="/" className="yt-logo-link">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="" className="yt-logo"/>
                    <span className="yt-logo-text">YouTube</span>
                    <span className="country-code">PH</span>
                </a>
            </div>
            <div className="center">
                <div className="search">
                    <input type="text" placeholder="Search" className="search-input"/>
                    <div className="icon search-icon">
                        <SearchIcon className="icon"/>
                    </div>
                </div>
                <MicIcon className="icon search-mic-icon"/>
            </div>
            <div className="right">
                <div className="search-icon-phone">
                    <SearchIcon className="icon"/>
                </div>
                <VideoCallOutlinedIcon className="icon"/>
                <AppsIcon className="icon"/>
                <NotificationsNoneIcon className="icon"/>
                <img src="https://yt3.ggpht.com/7WdX-cflWvM1AQeqQsib51WqrPi-QHl7970vrcWUe7h-_pZMXDqGnBvuaEBsINaLSnZYsLRKEA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="profile-pic icon"/>
            </div>
        </div>
    )
}

export default Header
