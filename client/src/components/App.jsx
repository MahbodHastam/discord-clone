import Content from './Main/Content';
import Members from './Main/Members';
import Topbar from './Main/Topbar';
import PrivateMessages from './PrivateMessages';
import Servers from './Servers';

const App = () => {
  return (
    <div id="app">
      <Servers />
      <PrivateMessages />
      <div id="main">
        <Topbar />
        <Content />
        <Members />
      </div>
    </div>
  );
}

export default App;
