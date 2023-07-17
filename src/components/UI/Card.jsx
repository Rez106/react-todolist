import './Card.css';

const Card = (props) => {
    return (
        <div className={`bg-slate-800 ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    );
}

export default Card;