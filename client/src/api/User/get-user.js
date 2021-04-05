import config from '../../config';

const getUser = () => {
  return fetch(`${config.apiBaseUrl}user/self`)
    .then(res => res.json());
};

export default getUser;