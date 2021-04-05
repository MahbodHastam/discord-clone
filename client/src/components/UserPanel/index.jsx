import React from 'react';
import GenerateProfile from '../Helpers/GenerateProfile';
import { MdSettings } from 'react-icons/md';

class UserPanel extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <div id="userPanel">
        <div className="information">
          <div className="avatar">
            <GenerateProfile image={user.avatar} />
          </div>
          <span className="name">{user.name}</span>
        </div>
        <div className="actions">
          <button className="btn tooltip-wrapper">
            <MdSettings />
            <span className="tooltip-content" style={{ fontSize: '.7em' }}>Settings</span>
          </button>
        </div>
      </div>
    );
  }
}

export default UserPanel;