import config from '../../config';

const getServers = () => {
  return fetch(`${config.apiBaseUrl}user/servers-list`)
    .then(res => res.json());
};

export default getServers;