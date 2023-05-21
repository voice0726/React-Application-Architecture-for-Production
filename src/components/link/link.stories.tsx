import { Meta, StoryObj } from '@storybook/react';

import { Link } from './link';

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '/',
    children: 'Click Me',
  },
};
