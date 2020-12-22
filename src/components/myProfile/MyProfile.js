import React from 'react';
import { userData } from '../../utils/myProfileAPI';
import GetAPI from '../../utils/userAPI'
import './style.scss';
import userAvatar from "../../assets/avatar_user.svg";
import achievementsIcon from "../../assets/Badges.svg";
import achievementsIcon3 from "../../assets/tgg163.svg";
import achievementsIcon2 from "../../assets/medal194.svg";
import { useUser, useUserUpdate } from '../../UserContext'

const MyProfile = () => {
    let user = useUser()
    let userData2 = GetAPI('/profile/me')
    console.log(userData2)
    return (
        <>
        <div className='user-profile-containe' >
             <div className="user-profile">
                <img src={userAvatar} alt='avatar' style={{ width: "20%" }} />
                <h1>{ userData.name }</h1>
                <button type='button'>change photo</button>
                <div className="user-badges">
                    <p>achievements</p>             
                    <img src={achievementsIcon} alt='achievement' style={{ width: "15%" }} />
                    <img src={achievementsIcon3} alt='achievement' style={{ width: "15%" }} />
                    <img src={achievementsIcon2} alt='achievement' style={{ width: "15%" }}/>
                </div> 
            </div>
            <div className='friend-profile-container'>
            {userData.friend.map((friend) => {
                return (
                    <div key={friend.id} className='user-friends-frofile'>
                    <img src={friend.photo} alt='avatar' style={{ width: "40%" }} />
                    <h2>{ friend.name }</h2>
                    <div className="user-badges">
                        <div className="user-badges">
                        {friend.achievements.map((achieve, index) => { 
                         return (<img key={index} alt='achievements' src={achieve} style={{ width: "20%" }} />)
                        })}
                        </div>
                    </div>
                    <button type='button'>view profile</button> 
                </div>
                )
              })}
            </div>
         </div>   
         </>    
    )
}

export default MyProfile;