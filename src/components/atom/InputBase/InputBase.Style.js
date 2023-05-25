import { styled, IconButton } from '@mui/material';
import { alpha, InputBase } from '@mui/material';

export const SearchStyled = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));

export const InputBaseStyled = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    paddingRight: `calc(1em + ${theme.spacing(3)})`,

    width: '100%',
  },
}));

export const IconButtonLeftStyled = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10,
}));

export const IconButtonRightStyled = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 10,
}));
