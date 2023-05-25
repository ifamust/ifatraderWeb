import { Stack } from '@mui/material';
import React from 'react';
import ChatFooter from '../ChatFooter/ChatFooter';
import ChatHeader from '../ChatHeader/ChatHeader';
import Messages from '../Messages/Messages';

const hello = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      {/* chat Header */}
      <ChatHeader />
      {/* msg */}
      <Messages />
      {/* chat Footer */}
      <ChatFooter />
    </div>
  );
};

export default hello;
