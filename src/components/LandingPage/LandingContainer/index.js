import HeroSection from '../HeroSection';
import FeaturesContainer from '../FeaturesContainer';
import Footer from '../Footer';

import './index.scss';

function LandingContainer() {

    return (

        <div className="landing-page">
            <HeroSection />
            <FeaturesContainer />
            <Footer />
        </div>
    )
}

export default LandingContainer;
