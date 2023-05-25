import { Box, useTheme } from '@mui/material';
import React from 'react';
import ChatsSubpage from '../../components/organisms/ChatsSubpage/ChatsSubpage';

import ConversationSubpage from '../../components/organisms/ConversationSubpage/ConversationSubpage';
const GeneralApp = () => {
  const theme = useTheme();

  return (
    <>
      {/* render chats */}
      <ChatsSubpage />
      <Box
        sx={{
          height: '100%',
          width: 'calc(100vw - 420px)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#F0F4FA'
              : theme.palette.background.default,
        }}
      >
        {/* render conversation */}
        <ConversationSubpage />
      </Box>
    </>
  );
};

export default GeneralApp;
