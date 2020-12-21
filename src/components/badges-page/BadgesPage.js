import { useState } from 'react';
import { badgesData } from '../../utils/badgesData';
import BadgeText from './BadgeText';
import { getUserBadges } from '../../service/userRequests';
import comingSoon from '../../assets/coming-soon.svg';
import './style.scss'

const BadgesPage = () => {

    console.log('render')
    const [badges, setBadges] = useState();

    const displayBadges = async () => {
        try {
            const reqBadges = await getUserBadges();
            console.log('requestBadges', reqBadges)
            setBadges(reqBadges);
        } catch (err) {
            console.log(err.message)
        }


    }
    displayBadges();

    return (
        <div className="badges-page-container">
            {
                badgesData.map((item) => {
                    console.log('mp')
                    const badgeClass = badges.includes(item.identifier) ? 'received' : 'not-received';
                    return <div key={Date.now() + item.identifier} className={`${badgeClass === 'received' ? 'badge-card-received' : 'badge-card-not-received'} `}
                        style={{ order: `${badgeClass === 'received' ? 0 : 1}` }}>
                        {badgeClass === 'received' && <p>Achieved</p>}
                        <img alt={item.identifier} src={item.src} className={badgeClass} />
                        <BadgeText title={item.title} />
                    </div>
                })
            }
            <div className='badge-card-received' style={{ order: 2 }}>
                <img alt='coming-soon' src={comingSoon} className='received' />
                <BadgeText title='More badges coming soon' />
            </div>
        </div>
    )
}

export default BadgesPage;