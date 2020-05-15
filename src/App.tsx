import React from 'react';

import GlobalStyles from 'assets/styles/globals';

import { ChatComponent } from '~/chat/Chat.component';


const App: React.FC = () => {
  return (
    <>
      <ChatComponent />
      <GlobalStyles />
    </>
  )
}

export default App
