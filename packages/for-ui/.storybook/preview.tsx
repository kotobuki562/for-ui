import React from 'react';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

import '../styles/global.css';
import '../styles/tailwind.v2.css';

export const parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#FFF',
      },
    ],
  },
  controls: { expanded: true },
  options: {
    storySort: {
      order: ['General', 'Form', 'Data Display', 'Feedback', 'Navigation'],
    },
  },
};

const rootElement = document.getElementById('root');

const theme = createTheme({
  components: {
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="p-2">
          <Story />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  ),
];
