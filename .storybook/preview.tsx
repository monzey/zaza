import type { Preview } from "@storybook/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import Table from '../src/stories/Table/theme.js'

const theme = extendTheme({
  components: { Table },
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
