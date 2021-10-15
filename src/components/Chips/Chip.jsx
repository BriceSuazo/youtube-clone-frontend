import './chips.css';

const Chip = (props) => {
    
    return (
        <div className="chip">
            <span className="chip-title">{props.text}</span>
        </div>
    )
}

export default Chip
