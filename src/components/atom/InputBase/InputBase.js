import { IconButton } from '@mui/material';
import { LinkSimple, Smiley } from 'phosphor-react';
import React from 'react';
import {
  SearchStyled,
  InputBaseStyled,
  IconButtonLeftStyled,
  IconButtonRightStyled,
} from './InputBase.Style';

const InputBase = ({
  placeholder,
  leftIcon,
  rightIcon,
  inputProps,
  setOpenPicker,
}) => {
  const smileyClicked = () => {
    setOpenPicker((prev) => !prev);
    console.log('smile...');
  };
  const attachedClicked = () => {
    console.log('add attachement...');
  };
  return (
    <SearchStyled>
      {leftIcon ? (
        <IconButtonLeftStyled onClick={attachedClicked}>
          {leftIcon}
        </IconButtonLeftStyled>
      ) : null}

      <InputBaseStyled
        fullWidth
        variant='filled'
        placeholder={placeholder}
        inputProps={inputProps}
      />

      {rightIcon ? (
        <IconButtonRightStyled onClick={smileyClicked}>
          {rightIcon}
        </IconButtonRightStyled>
      ) : null}
    </SearchStyled>
  );
};

export default InputBase;
