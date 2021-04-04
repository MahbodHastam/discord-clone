import { MdDashboard, MdHelp, MdInbox, MdModeComment } from 'react-icons/md';

const Topbar = () => {
  return (
    <div id="topbar">
      <div>
        <span><MdDashboard /> <b>Dibcord</b></span>
        <div className="mini-dot"></div>
        <button className="active">Online</button>
        <button>All</button>
        <button>Pending</button>
        <button>Block</button>
        <button>Add Friend</button>
      </div>
      <div>
        <a href="#/" className="tooltip-wrapper">
          <MdModeComment />
          <span className="tooltip-content tooltip-bottom">Create Group</span>
        </a>
        <a href="#/" className="tooltip-wrapper">
          <MdInbox />
          <span className="tooltip-content tooltip-bottom">Inbox</span>
        </a>
        <a href="#/" className="tooltip-wrapper">
          <MdHelp />
          <span className="tooltip-content tooltip-bottom">Help</span>
        </a>
      </div>
    </div>
  )
}

export default Topbar;