import { PlusSquareIcon } from '@chakra-ui/icons';
import { Meta, StoryObj } from '@storybook/react';

import { Link } from './link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
};
export default meta;

export const Default: StoryObj<typeof Link> = {
  args: {
    href: '/',
    children: 'Home',
  },
};

export const WithError: StoryObj<typeof Link> = {
  args: {
    href: '/',
    children: 'Home',
    icon: <PlusSquareIcon />,
  },
};
