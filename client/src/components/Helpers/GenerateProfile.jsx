import React from 'react';

const GenerateProfile = (props) => {
  const { image, name = '??' } = props;
  return checkUrl(image) ? (
    <img src={image} alt={name} />
  ) : (
    <div className="profile-avatar-using-words">{name}</div>
  );
};

const checkUrl = (url) => {
  if (!url) return false;
  return url;
  /*fetch(url)
    .then(res => {
      console.log(res);
      if (res.ok)
        return url;
      return false;
    }).catch(error => console.error(error));*/
};

export default GenerateProfile;