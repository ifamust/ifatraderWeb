import { Box, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Chat_History } from '../../../data/index';
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from '../../molecules/Timeline/Timeline';

const Messages = () => {
  const theme = useTheme();
  return (
    <Box
      width={'100%'}
      sx={{
        backgroundColor:
          theme.palette.mode === 'light'
            ? 'fff'
            : theme.palette.background.default,
        // theme.palette.background.paper,
        height: '100%',
        overflowY: 'scroll',
      }}
      p={3}
    >
      <Stack p={3} spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case 'divider':
              return <Timeline el={el} />;

            case 'msg':
              switch (el.subtype) {
                case 'img':
                  //image message
                  return <MediaMsg el={el} />;
                case 'doc':
                  //doc message
                  return <DocMsg el={el} />;
                case 'link':
                  //link message
                  return <LinkMsg el={el} />;
                case 'reply':
                  //reply message
                  return <ReplyMsg el={el} />;

                default:
                  //text message
                  return <TextMsg el={el} />;
              }

              break;
            default:
              break;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Messages;
