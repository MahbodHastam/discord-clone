import React from 'react';
import { MdClose } from 'react-icons/md';
import api from '../api';
import UserPanel from './UserPanel';

class PrivateMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      user: {},
    };
  }

  async componentDidMount() {
    /* this.setState({
      friends: [
        { id: 1, name: 'abooji', status: 'babooji', avatar: logo },
        { id: 2, name: 'Khikhi Khi', status: 'IsDead', avatar: `${config.apiBaseUrl}img/1.jpg` },
        { id: 3, name: 'Akbaro Kobra', status: 'Kabootar bache kardeh', avatar: `${config.apiBaseUrl}img/2.jpg` },
      ]
    }); */
    const friends = await api.getFriends();
    const user = await api.getUser();
    this.setState({ friends, user });
  }

  friendClickEvent = (friend) => {
    console.log(friend);
  }

  renderFriends = (friends) => {
    if (!friends.length) {
      return (
        <div className="noFriendDiv">
          <h5 className="msg">You don't have any friend...</h5>
          <button className="btn btn-primary">Let's Add</button>
        </div>
      );
    }
    return friends.map((friend) => (
      <div
        key={friend.id}
        className={friend.id === 2 ? 'friend-item active' : 'friend-item'}
        onClick={() => this.friendClickEvent(friend)}
      >
        <div className="avatar">
          <img src={friend.avatar} alt={''} />
        </div>
        <div className="information">
          <span>{friend.name}</span>
          <small>{friend.status}</small>
        </div>
        <div className="actions">
          <button className="btn"><MdClose /></button>
        </div>
      </div>
    ));
  }

  render() {
    const user = this.state.user;
    return (
      <div id="leftSide">
        <div className="topbar">
          <input type="text" placeholder="Search in your friends list" />
        </div>
        <div className="friends-wrapper">
          {this.renderFriends(this.state.friends)}
        </div>
        <UserPanel user={user} />
      </div>
    );
  }
};
export default PrivateMessages;