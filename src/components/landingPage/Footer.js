import Button from './Button';
import './style.scss';


function Footer() {

    return (
        <footer className="landing-page-footer">

            <div className="social-media">
                <Button text="Create new goal now" />
                <div>
                    <a className="social-icon" href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                    <a className="social-icon" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                    <a className="social-icon" href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;