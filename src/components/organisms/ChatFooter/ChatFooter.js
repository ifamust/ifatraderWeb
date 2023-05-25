import React, { useState } from 'react';
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  useTheme,
} from '@mui/material';
import {
  Gear,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Smiley,
} from 'phosphor-react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import InputBase from '../../atom/InputBase/InputBase';

const ChatFooter = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#F8FAFF'
            : theme.palette.background.paper,
        boxShadow: ' 0px 0px 2px rgba(0, 0, 0, 0.25)',
      }}
      p={2}
    >
      <Stack direction={'row'}>
        <Stack sx={{ width: '100%' }}>
          <Box
            sx={{
              display: openPicker ? 'inline' : 'none',
              zIndex: 10,
              position: 'fixed',
              bottom: 81,
              right: 60,
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <InputBase
            leftIcon={<LinkSimple color={'#709CE6'} />}
            rightIcon={<Smiley color={'#709CE6'} />}
            placeholder={'Write a message...'}
            setOpenPicker={setOpenPicker}
            inputProps={{
              'aria-label': 'search',
            }}
          />
        </Stack>

        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton sx={{ width: 'max-content', color: '#fff' }}>
              <PaperPlaneTilt />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ChatFooter;
