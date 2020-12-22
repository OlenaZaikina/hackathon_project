import Button from './Button';
import SocialLink from './SocialLink';
import './style.scss';


function Footer() {

    return (
        <footer className="landing-page-footer">

            <div className="social-media">
                <Button text="Create new goal now" />
                <SocialLink />
            </div>
        </footer>
    )
}

export default Footer;