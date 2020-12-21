import requestConfig from './requestConfig';

const { token, proxyurl, headers } = requestConfig;


// console.log(token)

export const getUserBadges = async () => {
    try {
        const url = 'http://34.222.107.139:8080/goaltracker/api/user/badges';
        console.log('in user request')
        const response = await fetch(proxyurl + url, {
            headers
        })

        const data = await response.json();
        return data;
    } catch (err) {
        return err.message;
    }
}