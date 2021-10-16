import './contents.css';
import ContentThumbnail from './ContentThumbnail/ContentThumbnail';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Contents = () => {
    return (
        <div className="Contents">
            <div className="contents-container">
                <div className="contents-wrapper">
                    <ContentThumbnail />
                    <ContentThumbnail />
                    <ContentThumbnail />
                    <ContentThumbnail />
                    <div className="contents-category">
                        <div className="category-title-wrapper">
                            <span className="category-title">COVID-19 news</span>
                            <CloseIcon className="icon close-icon"/>
                        </div>
                        <div className="contents-wrapper-category">
                            <ContentThumbnail />
                            <ContentThumbnail />
                            <ContentThumbnail />
                            <ContentThumbnail />
                        </div>
                        <div className="icon category-see-more">
                            <KeyboardArrowDownIcon fontSize="large"/>
                        </div>
                    </div>
                    <ContentThumbnail />
                    <ContentThumbnail />
                    <ContentThumbnail />
                    <ContentThumbnail />
                </div>
            </div>
        </div>
    )
}

export default Contents
