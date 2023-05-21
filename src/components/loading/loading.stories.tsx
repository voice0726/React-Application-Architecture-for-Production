import { Meta, StoryObj } from '@storybook/react';

import { Loading } from './loading';

const meta: Meta = {
  title: 'Components/Loading',
  component: Loading,
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
