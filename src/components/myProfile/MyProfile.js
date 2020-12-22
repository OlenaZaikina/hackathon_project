import React from 'react';
import GetAPI from '../../utils/userAPI'
import './style.scss';
import userIcon2 from "../../assets/avatar.svg";
import userIcon1 from "../../assets/avatar_user.svg";
import userIcon3 from "../../assets/userIcon3.svg";
import userIcon4 from "../../assets/userIcon4.svg";
import userIcon5 from "../../assets/userIcon5.svg";
import { useUser, useUserUpdate } from '../../UserContext'
import dayBadge from '../../assets/dayBadge.svg';
import weekBadge from '../../assets/weekBadge.svg';
import monthBadge from '../../assets/monthBadge.svg';
import yearBadge from '../../assets/yearBadge.svg';
import completedBadge from '../../assets/completedBadge.svg';

const UserIcon = {
    userIcon1: userIcon1,
    userIcon2: userIcon2,
    userIcon3: userIcon3,
    userIcon4: userIcon4,
    userIcon5: userIcon5
}

const MyProfile = () => {
    const badgeData = {
        'dayBadge': dayBadge,
        'weekBadge': weekBadge,
        'monthBadge': monthBadge,
        'yearBadge': yearBadge,
        'completedBadge': completedBadge
    }
    let user = useUser()
    let userdata = GetAPI('/profile/me')
    return (
        <>
            {Object.keys(userdata).length > 0
                ? (<div className='user-profile-containe' >
                    <div className="user-profile">
                        {userdata.badges.length > 2
                            ? <img src={userIcon1} alt='avatar' style={{ width: "20%" }} />
                            : <img src={userIcon3} alt='avatar' style={{ width: "20%" }} />
                        }
                        <h1>{userdata.name}</h1>
                        <div className="user-badges">
                            <h2>Badges</h2>
                            {userdata.badges.map((badge, index) => {
                                return (
                                    <img key={index} src={badgeData[badge]} alt='avatar' style={{ width: "25%" }} />
                                )
                            })}
                        </div>
                    </div>
                    <div className='friend-profile-container'>
                        {userdata.friends.map((friend, index) => {
                            return (
                                <div key={friend.id} className='user-friends-frofile'>
                                    {userdata.badges.length > 2
                                        ? <img src={userIcon1} alt='avatar' style={{ width: "20%" }} />
                                        : <img src={userIcon3} alt='avatar' style={{ width: "20%" }} />
                                    }
                                    <h2>{friend.name}</h2>
                                    <div className="user-badges">
                                        <div className="user-badges">
                                            {friend.badges.map((badge, index) => {
                                                return (<img key={index} alt='achievements' src={badgeData[badge]} style={{ width: "25%" }} />)
                                            })}
                                        </div>
                                    </div>
                                    <button type='button'>view profile</button>
                                </div>
                            )
                        })}
                    </div>
                </div>)
                : (null)}
        </>
    )
}

export default MyProfile;