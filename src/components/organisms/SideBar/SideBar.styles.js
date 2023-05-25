import styled from 'styled-components';
import { Box, Stack } from '@mui/material';

export const MainContainer = styled.div`
  display: flex;
`;

export const MainStackContainer = styled(Stack)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
export const IconListStack = styled(Stack)`
  align-items: center;
`;

export const TopIconsStack = styled(Stack)`
  align-items: center;
  //   flex: 1;
`;

export const BottomStack = styled(Stack)`
  align-items: center;
`;

export const CustomLayoutBox = styled(Box)`
  background-color: ${({ theme }) =>
    `${theme.palette.background.paper}` ?? 'black'};
  height: 100vh;
  width: 100px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  padding: 16px;
`;

export const CustomBox = styled(Box)`
  background-color: ${({ theme }) =>
    `${theme?.palette?.primary.main}` ?? 'black'};
  height: ${({ height }) => `${height}` ?? '64px'};
  width: ${({ width }) => `${width}` ?? '64px'};
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: center;
  padding-top: 12px;
  border-radius: 8px;
`;
