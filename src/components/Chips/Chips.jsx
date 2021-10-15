import './chips.css';
import Chip from './Chip';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Chips = () => {
    return (
        <div className="chips">
            <Chip text="All" focus="true"/>
            <Chip text="Brice"/>
            <Chip text="Suazo"/>
            <Chip text="Coding"/>
            <Chip text="Brice Suazo"/>
            <Chip text="ReactJS Clone Test"/>
            <Chip text="ReactJS Clone Test"/>
            <Chip text="ReactJS Clone Test"/>
            <Chip text="ReactJS Clone Test"/>
            <ChevronRightIcon className="icon chip-icon-more"/>
        </div>
    )
}

export default Chips
