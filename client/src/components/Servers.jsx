import React from 'react';
import GenerateProfile from "./Helpers/GenerateProfile";
import {MdMessage} from 'react-icons/md';
import api from '../api';

class Servers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      servers: []
    };
  }

  async componentDidMount() {
    const servers = await api.getServers();
    this.setState({ servers });
  }

  hasUnreadMessage = (unreadMessagesCount) => {
    return unreadMessagesCount !== 0;
  }

  render() {
    return (
      <div id="servers">

        <div className="server active">
          <div className="profile-avatar-using-words">
            <MdMessage/>
          </div>
        </div>

        {this.state.servers.map(server => (
          <div className={`server ${this.hasUnreadMessage(server.unreadMessages) ? 'has-unreadMessages' : ''}`} key={server.id}>
            <GenerateProfile image={server.avatar} name={`${server.name.charAt(0)}${server.name.charAt(1)}`} />
            <span className="title">{server.name}</span>
            {server.unreadMessages !== 0 ? <span className="unreadMessages">{server.unreadMessages}</span> : ''}
          </div>
        ))}

      </div>
    );
  }
}

export default Servers;