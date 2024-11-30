import React from 'react';
import '../app/globals.css';
import './radixUiThemes.css';
import type { Preview } from '@storybook/react';
import { Theme } from '@radix-ui/themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

export default preview;
