import dayBadge from '../assets/dayBadge.svg';
import weekBadge from '../assets/weekBadge.svg';
import monthBadge from '../assets/monthBadge.svg';
import yearBadge from '../assets/yearBadge.svg';
import completedBadge from '../assets/completedBadge.svg';

export const badgesData = [
    {
        title: "You earned badge for day updating",
        identifier: 'dayBadge',
        src: dayBadge
    },
    {
        title: "You earned badge for week updating",
        identifier: 'weekBadge',
        src: weekBadge
    },
    {
        title: "You earned badge for month updating",
        identifier: 'monthBadge',
        src: monthBadge
    },
    {
        title: "You earned badge for year updating. Wow!",
        identifier: 'yearBadge',
        src: yearBadge
    },
    {
        title: "You completed your goal. Awesome!",
        identifier: 'completedBadge',
        src: completedBadge
    }
];

// const className = isReceived ? 'received' : 'not-received';