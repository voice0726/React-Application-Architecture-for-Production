---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react';

import { <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>'

const meta: Meta = {
  title: 'Components/<%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
}

export default meta;

type Story = StoryObj<typeof <%= h.changeCase.pascalCase(name) %>>;

export const Default: Story = {
  args: {},
};
