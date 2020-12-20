import usersList from '../../utils/fakeUser.json';
import { badgesData } from '../../utils/badgesData';
import BadgeText from './BadgeText';
import './style.scss'

const BadgesPage = () => {

    /*FAKE DATA*/
    const userId = '2';
    const { users } = usersList;
    const user = users.filter(item => {
        return item.userId === userId
    }
    )[0];
    const userBadges = user.badges;
    /*FAKE DATA */

    return (
        <div className="badges-page-container">
            {
                badgesData.map((item, index) => {
                    const badgeClass = userBadges.includes(item.identifier) ? 'received' : 'not-received';
                    return <div key={Date.now() + item.identifier} className={`${badgeClass === 'received' ? 'badge-card-received': 'badge-card-not-received'} `}
                    
                    
                    style={{ order: `${badgeClass === 'received' ? 0 : 1}` }}>
                        <img alt={item.identifier} src={item.src} className={badgeClass} />
                        <BadgeText title={item.title} />
                    </div>
                })
            }

        </div>
    )
}

export default BadgesPage;