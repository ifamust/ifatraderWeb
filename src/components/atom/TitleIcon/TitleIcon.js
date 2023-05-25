import { Typography } from '@mui/material';
import React from 'react';
import { StackContainer } from './TitleIcon.styles';

const TitleIcon = ({ title, icon, direction, titleVariant }) => {
  return (
    <StackContainer direction={direction}>
      <Typography variant={titleVariant}>{title}</Typography>
      <div>{icon}</div>
    </StackContainer>
  );
};

export default TitleIcon;
