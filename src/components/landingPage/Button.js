import { Link } from 'react-router-dom';
import './style.scss';

function Button({ text }) {

    return (
        <Link
            to={{
                pathname: "/signup"
            }}
        >
            <button className="call-to-action-button">{text}</button>
        </Link>
    )
}

export default Button;