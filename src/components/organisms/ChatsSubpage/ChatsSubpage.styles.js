import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';

export const BoxContainer = styled(Box)`
  position: relative;
  width: 320px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;

export const SearchStack = styled(Stack)`
  width: 100%;
`;
export const TopStack = styled(Stack)`
  width: 100%;
  height: 100vh;
`;

export const ArchiveStack = styled(Stack)`
  width: 100%;
`;
export const ChatStack = styled(Stack)`
  display: flex;
  flex-direction: column;
  // flex-grow: 1;
  overflow-y: scroll;
  height: 100%;
`;
export const PinStack = styled(Stack)`
  display: flex;
`;
export const AllStack = styled(Stack)`
  display: flex;
  padding: 20px 0px;
`;
export const ArchiveStackWrapper = styled(Stack)`
  //   display: flex;
`;
