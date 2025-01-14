import React from 'react';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import MuiSwitch from '@mui/material/Switch';
import clsx from 'clsx';

export type SwitchProps = Omit<FormControlLabelProps, 'control'> & {
  value?: unknown;
  disable?: boolean;
};

export const Switch: React.FC<SwitchProps> = ({ value, checked, disabled, ...rest }) => {
  return (
    <FormControlLabel
      control={
        <MuiSwitch
          value={value}
          checked={checked}
          disabled={disabled}
          classes={{
            root: clsx(['my-2 mr-2 h-6 w-11 p-0']),
            track: clsx([
              'bg-primary-dark-default block h-full w-full rounded-xl opacity-100',
              checked && 'bg-secondary-dark-default opacity-100',
              disabled && 'bg-primary-dark-disabled opacity-100',
              checked && disabled && 'bg-secondary-dark-disabled opacity-100',
            ]),
            thumb: clsx([
              'bg-shade-white-default absolute top-1 left-1 h-4 w-4 rounded-2xl transition-all duration-200 ease-in',
            ]),
          }}
        />
      }
      {...rest}
    />
  );
};
