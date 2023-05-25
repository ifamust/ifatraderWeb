import styled from 'styled-components';
import { Box, Stack, Theme } from '@mui/material';

export const Container = styled.div`
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

// export const CustomBox = styled(Box)<{ theme: Theme, width?: string, height?: string }>(
//     ({ theme, width, height }) => ({
//         backgroundColor: `${theme.palette.primary.main}`,
//         height: height,
//         width: width,
//         borderRadius: 2.5,
//         // alignItems: 'center',
//         display: 'flex',
//         alignContent: 'center'

//     }),

// export const CustomLayoutBox = styled(Box)<{ theme: Theme }>(
//     ({ theme }) => ({
//         backgroundColor: `${theme.palette.background.paper}`,
//         height: '100vh',
//         width: '100px',
//         boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)'
//     }),

//   );
