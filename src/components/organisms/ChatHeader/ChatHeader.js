import { faker } from '@faker-js/faker';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';
import React from 'react';
import IconTitleSubtitle from '../../molecules/IconTitleSubtitle/IconTitleSubtitle';

const ChatHeader = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#F8FAFF'
            : theme.palette.background.paper,
        // theme.palette.background.default,
        boxShadow: ' 0px 0px 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack
        alignItems={'center'}
        direction='row'
        justifyContent={'space-between'}
        sx={{ width: '100%', height: '100%' }}
        p={2}
      >
        <Box>
          <IconTitleSubtitle
            title={'ifamust'}
            online={true}
            subtitle={'online'}
            titleVariant='subtitle2'
            subtitleVariant='caption'
            icon={<Avatar src={faker.image.avatar()} />}
          />
        </Box>
        <Stack direction={'row'} alignItems={'center'} spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>

          <IconButton>
            <Phone />
          </IconButton>

          <IconButton>
            <MagnifyingGlass />
          </IconButton>

          <Divider orientation='vertical' flexItem />

          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatHeader;
