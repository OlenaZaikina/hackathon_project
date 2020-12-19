import usersList from '../../utils/fakeUser.json';
import badgesData from '../../utils/badgesData';

import './style.scss'

function BadgesPage() {
    const userId = '2';
    const { users } = usersList;
    const user = users.filter(item => {
        console.log(users, '-users');
        console.log(item.userId, '-item id user');
        console.log(userId, '-hardcoded id');
        return item.userId === userId
    }
    )[0];
    const userBadges = user.badges;
    const badgesPath = userBadges.filter((item, index)=>{

    })


    console.log(user.badges, 'user')
    return (
        <div className="badges-page-container">
            {userBadges.map((item, index) => {
                return <div key={item}>{item}</div>
            })}
        </div>
    )
}

export default BadgesPage;