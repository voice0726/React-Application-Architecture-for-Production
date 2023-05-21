import { Meta, StoryObj } from '@storybook/react';

import { InputField } from './input-field';

const meta: Meta = {
  title: 'Components/Form/InputField',
  component: InputField,
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'Name',
  },
};

export const WithError: Story = {
  args: {
    label: 'Name',
    error: {
      type: 'required',
      message: 'Name is required!',
    },
  },
};
