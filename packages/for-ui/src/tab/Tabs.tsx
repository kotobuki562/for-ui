import React from 'react';
import { Box } from '@mui/material';
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import clsx from 'clsx';

export interface TabsProps extends MuiTabsProps {
  noBorder?: boolean;
  reverse?: boolean;
  color?: 'primary' | 'secondary';
}

const colorStyle = {
  primary: clsx`bg-primary-dark-default`,
  secondary: clsx`bg-secondary-dark-default`,
};

export const Tabs: React.FC<TabsProps> = (props) => {
  return props.noBorder ? <_Tabs {...props}>{props.children}</_Tabs> : <BorderedTabs {...props} />;
};

const BorderedTabs: React.FC<TabsProps> = (props) => (
  <Box className="w-full">
    {!props.noBorder && props.reverse && (
      <div
        className={clsx(['border-shade-light-default absolute box-border h-0 w-full border-b-[1px] border-solid'])}
      />
    )}

    <_Tabs {...props}>{props.children}</_Tabs>

    {!props.noBorder && !props.reverse && (
      <div
        className={clsx(['border-shade-light-default absolute box-border h-0 w-full border-b-[1px] border-solid'])}
      />
    )}
  </Box>
);

const _Tabs: React.FC<TabsProps> = ({ reverse = false, color = 'secondary', value, onChange, children, ...rest }) => {
  return (
    <MuiTabs
      value={value}
      onChange={onChange}
      classes={{
        root: clsx(['min-h-[auto]']),
        indicator: clsx([colorStyle[color], reverse && 'top-0']),
      }}
      {...rest}
    >
      {children}
    </MuiTabs>
  );
};
