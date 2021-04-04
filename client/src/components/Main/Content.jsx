/* eslint-disable no-self-compare */
import React from 'react';
import api from '../../api';
import { SiGooglemessages } from 'react-icons/si';
import { MdClose } from 'react-icons/md';
import IsOnline from '../Helpers/IsOnline';

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
    if (!this.state.friends.length) {
      return (
        <div>no one is online :/</div>
      );
    }
    const { friends } = this.state;
    return (
      <div id="content">
        {1 === 1 ? <FriendsContent friends={friends} /> : <ChannelContent />}
      </div>
    );
  }
}

const FriendsContent = (friends) => {
  return (
    <div className="friends-content">
      
      {friends.friends.map((friend) => (
        <div key={friend.id} className="friend-item">
          <div className="avatar">
            <img src={friend.avatar} alt={''} />
            <IsOnline bool={friend.isOnline} />
          </div>
          <div className="information">
            <span>{friend.name}</span>
            <small>{friend.status}</small>
          </div>
          <div className="actions">
            <button className="btn tooltip-wrapper">
              <SiGooglemessages />
              <span className="tooltip-content" style={{ fontSize: '.7em', bottom: '-10px' }}>Message</span>
            </button>
            <button className="btn tooltip-wrapper">
              <MdClose />
              <span className="tooltip-content" style={{ fontSize: '.7em', bottom: '-10px' }}>Remove Friend</span>
            </button>
          </div>
        </div>
      ))}
      
    </div>
  );
};

const ChannelContent = () => {
  return (
    <div>
      Channel content component
    </div>
  );
};

export default Content;