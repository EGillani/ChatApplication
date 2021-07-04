import { ChatEngine } from 'react-chat-engine';
import { Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import projectID from './cred.js';

import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      <Fab color="primary" text="help">
        Navigate
      </Fab>
    </div>
  );
};

// infinite scroll, logout, more customizations...

export default App;
