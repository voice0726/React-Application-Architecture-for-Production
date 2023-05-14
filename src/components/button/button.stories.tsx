import { PlusSquareIcon } from '@chakra-ui/icons';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Title',
  },
};

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: 'Click Me',
    icon: <PlusSquareIcon />,
  },
};
