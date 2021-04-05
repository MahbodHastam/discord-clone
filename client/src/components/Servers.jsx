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

  render() {
    return (
      <div id="servers">

        <div className="server active">
          <div className="profile-avatar-using-words">
            <MdMessage/>
          </div>
        </div>

        {this.state.servers.map(server => (
          <div className="server" key={server.id}>
            <GenerateProfile image={server.avatar} name={`${server.name.charAt(0)}${server.name.charAt(1)}`} />
            <span className="title">{server.name}</span>
          </div>
        ))}

      </div>
    );
  }
}

export default Servers;