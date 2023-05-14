import { Meta, StoryObj } from '@storybook/react';

import { InputField } from './input-field';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
};
export default meta;

export const Default: StoryObj<typeof InputField> = {
  args: {},
};

export const WithError: StoryObj<typeof InputField> = {
  args: {
    error: { type: 'error', message: 'error message' },
  },
};
