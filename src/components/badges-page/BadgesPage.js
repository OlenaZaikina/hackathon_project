import { useState } from 'react';
import usersList from '../../utils/fakeUser.json';
import { badgesData } from '../../utils/badgesData';
import BadgeText from './BadgeText';
import comingSoon from '../../assets/coming-soon.svg';
import './style.scss'

const BadgesPage = () => {
    console.log('badge page render')

    const [badges, setBadges] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('user')).token;

    const requestConfig = {
        proxyurl: 'https://cryptic-mesa-87242.herokuapp.com/',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
        },
    }


    const getBadges = async () => {
        try {
            console.log('isFetching before request done',isFetching)
            if (isFetching) {

                console.log()
                const response = await fetch(requestConfig.proxyurl + 'http://34.222.107.139:8080/goaltracker/api/user/badges', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'http://localhost:3000',
                        'Access-Control-Allow-Credentials': 'true',
                        'Authorization': token
                    }
                });
                console.log('response', response)
                const data = await response.json();

                console.log(data);
                setBadges(data);
                setIsFetching(false);
                console.log('isFetching after request done',isFetching)
            }
        } catch (err) {
            console.log(err.message)
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