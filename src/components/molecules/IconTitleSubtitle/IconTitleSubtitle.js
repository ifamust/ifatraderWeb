import { Stack, Typography } from '@mui/material';
import React from 'react';
import StyledBadge from '../../atom/StyledBadge';

const IconTitleSubtitle = ({
  icon,
  online,
  title,
  subtitle,
  titleVariant,
  subtitleVariant,
}) => {
  return (
    <Stack direction={'row'} spacing={2}>
      {online ? (
        <Stack>
          <StyledBadge
            overlap='circular'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant='dot'
          >
            {icon}
          </StyledBadge>
        </Stack>
      ) : (
        icon
      )}

      <Stack spacing={0.3}>
        <Typography variant={titleVariant}>{title}</Typography>
        <Typography variant={subtitleVariant}>{subtitle} </Typography>
      </Stack>
    </Stack>
  );
};

export default IconTitleSubtitle;
