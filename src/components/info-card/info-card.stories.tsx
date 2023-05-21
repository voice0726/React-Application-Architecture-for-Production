import { Meta, StoryObj } from '@storybook/react';

import { InfoCard } from './info-card';

const meta: Meta = {
  title: 'Components/InfoCard',
  component: InfoCard,
};

export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
  args: {
    label: 'Full Name',
    value: 'John Doe',
  },
};
