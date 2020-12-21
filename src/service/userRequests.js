import { requestConfig } from './requestConfig';

export const getBadgesRequest = () => {
    return fetch(requestConfig.proxyurl + 'http://34.222.107.139:8080/goaltracker/api/user/badges', {
        headers: requestConfig.headers
    }
    );
}
