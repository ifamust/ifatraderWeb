import { Avatar, Badge, Stack } from '@mui/material';
import React from 'react';
import {
  StackContainer,
  ChatWrapper,
  LeftStack,
  RightStack,
} from './ChatElement.styles';
import { faker } from '@faker-js/faker';

import IconTitleSubtitle from '../IconTitleSubtitle/IconTitleSubtitle';
import TitleIcon from '../../atom/TitleIcon/TitleIcon';
import { useTheme } from '@mui/material/styles';

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();
  return (
    <StackContainer
      p={2}
      sx={{
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#fff'
            : theme.palette.background.default,
      }}
    >
      <ChatWrapper direction={'row'}>
        <LeftStack>
          <IconTitleSubtitle
            title={name}
            online={online}
            subtitle={msg}
            titleVariant='subtitle2'
            subtitleVariant='caption'
            icon={<Avatar src={faker.image.avatar()} />}
          />
        </LeftStack>
        <RightStack>
          <TitleIcon
            title={time}
            direction='column'
            icon={<Badge color='primary' badgeContent={unread}></Badge>}
            titleVariant='caption'
          />
        </RightStack>
      </ChatWrapper>
    </StackContainer>
  );
};

export default ChatElement;
