/* eslint-disable no-self-compare */
import React from 'react';
import api from '../../api';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: []
    };
  }

  async componentDidMount() {
    const friends = (await api.getFriends()).filter(item => item.id % 2 !== 0);
    this.setState({ friends });
  }

  render() {
    return (
      <div id="content">
        {1 === 1 ? <FriendsContent friends={this.state.friends} /> : <ChannelContent />}
      </div>
    );
  }
}

const FriendsContent = (friends) => {
  console.log(friends);
  return <div>okay</div>;
  /* return (
    <div className="friends-content">
      
      {!friends.length ? <div>It's too Quiet...</div> : friends.map(friend => (
        <div>ehem ohum aha</div>
      ))}
      
    </div>
  ); */
};

const ChannelContent = () => {
  return (
    <div>
      Channel content component
    </div>
  );
};

export default Content;