import { Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import InputBase from '../../atom/InputBase/InputBase';
import TitleIcon from '../../atom/TitleIcon/TitleIcon';
import ChatElement from '../../molecules/ChatElement/ChatElement';
import {
  BoxContainer,
  SearchStack,
  TopStack,
  ArchiveStack,
  ArchiveStackWrapper,
  ChatStack,
  PinStack,
  AllStack,
} from './ChatsSubpage.styles';
import { ChatList } from '../../../data/index';
import { SimpleBarStyle } from '../../atom/Scrollbar/Scrollbar';
import { useTheme } from '@mui/material/styles';

const ChatsSubpage = () => {
  const theme = useTheme();
  return (
    <BoxContainer
      sx={{
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#F8FAFF'
            : theme.palette.background.paper,
      }}
    >
      <TopStack p={3} spacing={2}>
        <TitleIcon
          title={'Chats'}
          icon={
            <IconButton>
              <CircleDashed />
            </IconButton>
          }
          direction='row'
          titleVariant={'h5'}
        />
        <SearchStack>
          <InputBase
            placeholder={'Search...'}
            inputProps={{ 'aria-label': 'search' }}
            iconLeft={<MagnifyingGlass color={'#709CE6'} />}
          />
        </SearchStack>
        <ArchiveStack spacing={1}>
          <ArchiveStackWrapper
            direction='row'
            alignItems={'center'}
            spacing={1.5}
          >
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </ArchiveStackWrapper>
          <Divider />
        </ArchiveStack>

        <ChatStack>
          <SimpleBarStyle timeout={500}>
            <PinStack spacing={2.4}>
              <Typography variant='subtitle2' sx={{ color: '#676767' }}>
                Pinned
              </Typography>

              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </PinStack>

            <AllStack spacing={2.4}>
              <Typography variant='subtitle2' sx={{ color: '#676767' }}>
                All Chats
              </Typography>

              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </AllStack>
          </SimpleBarStyle>
        </ChatStack>
      </TopStack>
    </BoxContainer>
  );
};

export default ChatsSubpage;
