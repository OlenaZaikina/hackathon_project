import { useState } from 'react';
import { badgesData } from '../../utils/badgesData';
import BadgeText from './BadgeText';
import comingSoon from '../../assets/coming-soon.svg';
import { getBadgesRequest } from '../../service/userRequests';
import './style.scss'

const BadgesPage = () => {
    console.log('badge page render')

    const [badges, setBadges] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const getBadges = async () => {
        try {
            if (isFetching) {
                const response = await getBadgesRequest();
                const data = await response.json();
                setBadges(data);
                setIsFetching(false);
            }
        } catch (err) {
            console.log(err.message)
            return err.message;
        }
    }
    getBadges();

    return (
        <div className="badges-page-container">
            {isFetching && <p> Loading...</p>}
            {!isFetching &&
                <>{
                    badgesData.map((item) => {
                        const badgeClass = badges.includes(item.identifier) ? 'received' : 'not-received';
                        return <div key={Date.now() + item.identifier} className={`${badgeClass === 'received' ? 'badge-card-received' : 'badge-card-not-received'} `}

                            style={{ order: `${badgeClass === 'received' ? 0 : 1}` }}>
                            <img alt={item.identifier} src={item.src} className={badgeClass} />
                            <BadgeText title={item.title} />
                        </div>
                    })}
                    <div className='badge-card-received' style={{ order: 2 }}>
                        <img alt='coming-soon' src={comingSoon} className='received' />
                        <BadgeText title='More badges coming soon' />
                    </div>
                </>
            }
        </div>
    )
}

export default BadgesPage;