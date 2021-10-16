import './watch.css';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoInfo from './VideoInfo/VideoInfo';
import Chips from './../Chips/Chips';

const Watch = () => {
    return (
        <div className="Watch">
            <div className="video-container">
                <VideoPlayer />
                <VideoInfo />
            </div>
            <div className="watch-right">
                <Chips />

            </div>
        </div>
    )
}

export default Watch
