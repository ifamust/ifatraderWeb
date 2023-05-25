import { faker } from '@faker-js/faker';
import { Avatar, Stack, Typography } from '@mui/material';
import { LinkSimple, Smiley } from 'phosphor-react';
import React from 'react';
import InputBase from '../../components/atom/InputBase/InputBase';
import IconTitleSubtitle from '../../components/molecules/IconTitleSubtitle/IconTitleSubtitle';

const DevGuide = () => {
  return (
    <Stack padding={4}>
      <Typography variant='h3'>Dev Guide</Typography>

      <Stack p={3}>
        <Typography variant='h6' style={{ paddingBottom: '20px' }}>
          Icon Title Subtitle
        </Typography>

        <IconTitleSubtitle
          title={'ifamust'}
          online={true}
          subtitle={'looking good today '}
          titleVariant='subtitle2'
          subtitleVariant='caption'
          icon={<Avatar src={faker.image.avatar()} />}
        />
      </Stack>

      <Stack p={3}>
        <Typography variant='h6' style={{ paddingBottom: '20px' }}>
          TextInput
        </Typography>

        <Stack
          direction={'row'}
          sx={{ backgroundColor: '#F8FAFF', padding: '10px' }}
        >
          <InputBase
            iconLeft={<LinkSimple color={'#709CE6'} />}
            placeholder={'Search...'}
            inputProps={{
              'aria-label': 'search',
            }}
          />
          <InputBase
            iconLeft={<LinkSimple color={'#709CE6'} />}
            iconRight={<Smiley color={'#709CE6'} />}
            placeholder={'Write a message...'}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DevGuide;
