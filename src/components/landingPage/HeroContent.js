import Button from './Button';
import './style.scss';


function HeroContent() {

    return (

        <div className="app-description">
            <div className="app-description-container">
                <div className="logo">
                    Logo
                </div>
                <div className="app-desription-text-content">
                    <h2 className="app-description-header">Let's move forward together</h2>
                    <p className="app-description-text">Set goals for yourself and achieve them easily with the <span>Goals tracker</span>.
                Build a better, stronger and healthier you </p>

                    <Button text="Get started" />
                </div>
                <div className="app-description-nav">
                </div>

            </div>
        </div>
    )
}

export default HeroContent;
