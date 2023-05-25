import React, { useState } from 'react';
import {
  Avatar,
  Divider,
  IconButton,
  Stack,
  styled,
  Switch,
  useTheme,
} from '@mui/material';

import useSettings from '../../../hooks/useSettings';
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
} from 'phosphor-react';
import {
  CustomLayoutBox,
  CustomBox,
  MainContainer,
  IconListStack,
  TopIconsStack,
  MainStackContainer,
  BottomStack,
} from './SideBar.styles';
import Image from '../../atom/Image/Image';
import { faker } from '@faker-js/faker';
import Logo from '../../../assets/Images/logo_white.png';
import LogoLight from '../../../assets/Images/logo.png';
import AntSwitch from '../../atom/AntSwitch';

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const SideBar = () => {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const [selected, setSelected] = useState(0);

  return (
    <MainContainer>
      <CustomLayoutBox theme={theme}>
        <MainStackContainer spacing={3}>
          <CustomBox width='64px' height='64px'>
            <Image
              src={theme.palette.mode === 'light' ? LogoLight : Logo}
              width={'40px'}
              height={'40px'}
            />
          </CustomBox>

          <TopIconsStack spacing={3}>
            <IconListStack direction='column' spacing={3}>
              {Nav_Buttons.map((el) =>
                el.index === selected ? (
                  <CustomBox theme={theme} width='64px' height='64px'>
                    <IconButton
                      sx={{ width: 'max-content', color: '#fff' }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  </CustomBox>
                ) : (
                  <IconButton
                    onClick={() => setSelected(el.index)}
                    sx={{
                      width: 'max-content',
                      color:
                        theme.palette.mode === 'light'
                          ? '#000'
                          : theme.palette.text.primary,
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                )
              )}
              <Divider orientation='horizontal' sx={{ width: '48px' }} />
              <IconButton>
                {selected === 3 ? (
                  <CustomBox theme={theme} width='64px' height='64px'>
                    <IconButton sx={{ width: 'max-content', color: '#fff' }}>
                      <Gear />
                    </IconButton>
                  </CustomBox>
                ) : (
                  <IconButton
                    onClick={() => setSelected(3)}
                    sx={{
                      width: 'max-content',
                      color:
                        theme.palette.mode === 'light'
                          ? '#000'
                          : theme.palette.text.primary,
                    }}
                  >
                    <Gear />
                  </IconButton>
                )}
              </IconButton>
            </IconListStack>
          </TopIconsStack>
          <BottomStack spacing={4}>
            <AntSwitch onChange={() => onToggleMode()} />
            <Avatar src={faker.image.avatar()} />
          </BottomStack>
        </MainStackContainer>
      </CustomLayoutBox>
    </MainContainer>
  );
};

export default SideBar;
