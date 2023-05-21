import { Meta, StoryObj } from '@storybook/react';

import { NotFound } from './not-found';

const meta: Meta = {
  title: 'Components/NotFound',
  component: NotFound,
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Default: Story = {};
