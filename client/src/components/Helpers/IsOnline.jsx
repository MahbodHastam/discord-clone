const IsOnline = (bool) => {
  console.log(bool)
  return (
    <div className={`isOnline isOnline--${bool ? 'true' : 'false'}`}></div>
  );
};

export default IsOnline;