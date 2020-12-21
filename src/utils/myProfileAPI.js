import achievementsIcon from "../assets/Badges.svg";
import achievementIcon2 from "../assets/achievement.svg";
import achievementsIcon3 from "../assets/tgg163.svg";
import achievementsIcon4 from "../assets/medal194.svg";
import userIcon from "../assets/avatar.svg";
import userAvatar from "../assets/avatar_user.svg";

export const userData = {
  "id": 1,
  "first_name": "Frediani",
  "last_name": "Giavani",
  "photo": userIcon,
  "email": "jpenddreth0@census.gov",
  "achievements": [achievementsIcon, achievementsIcon3, achievementsIcon3],
  "friend": [{
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "photo": userIcon,
    "email": "jpenddreth0@census.gov",
    "achievements": [achievementsIcon, achievementsIcon3, achievementsIcon3]
  }, {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "photo": userAvatar,
    "email": "gfrediani1@senate.gov",
    "achievements": [achievementIcon2, achievementIcon2, achievementsIcon]
  }, {
    "id": 3,
    "first_name": "Noell",
    "last_name": "Bea",
    "photo": userIcon,
    "email": "nbea2@imageshack.us",
    "achievements": [achievementsIcon, achievementsIcon4, achievementsIcon4]
  }, {
    "id": 4,
    "first_name": "Willard",
    "last_name": "Valek",
    "photo": userAvatar,
    "email": "wvalek3@vk.com",
    "achievements": [achievementIcon2, achievementsIcon4, achievementsIcon3]
  }]
}

/* let headers = new Headers();
const body = JSON.stringify({
          "name": "Olena",
          "email": "olenazaikina5@ukr.net",
          "password": "qwerty123"
      })
headers.append('Content-Type', 'application/json');
 
headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
headers.append('Access-Control-Allow-Credentials', 'true');
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://34.222.107.139:8080/goaltracker/api/login';
let response = fetch(proxyurl + 'http://34.222.107.139:8080/goaltracker/api/register', { method: 'POST', 
body,
headers })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?")) */
