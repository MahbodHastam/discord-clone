import config from '../../config';

const getFriends = () => {
  return fetch(`${config.apiBaseUrl}user/friends-list`)
    .then(res => res.json());
};

export default getFriends;