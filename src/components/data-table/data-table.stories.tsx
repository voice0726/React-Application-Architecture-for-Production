import { Meta, StoryObj } from '@storybook/react';

import { testData } from '@/testing/test-data';

import { DataTable, DataTableProps } from './data-table';

const meta: Meta = {
  title: 'Components/DataTable',
  component: DataTable,
};

export default meta;

const data = testData.jobs.slice(0, 6);

const columns: DataTableProps<(typeof data)[0]>['columns'] = [
  {
    title: 'Position',
    field: 'position',
  },
  {
    title: 'Department',
    field: 'department',
  },
  {
    title: 'Location',
    field: 'location',
  },
];

type Story = StoryObj<typeof DataTable<(typeof data)[0]>>;

export const Default: Story = {
  args: {
    data,
    columns,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    isLoading: true,
  },
};
