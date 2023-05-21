import { Button, Stack } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';

import { useNotifications } from '@/stores/notifications';

import { Notifications } from './notifications';

const meta: Meta = {
  title: 'Components/Notifications',
  component: Notifications,
};

export default meta;

type Story = StoryObj<typeof Notifications>;

export const Default: Story = {
  args: {},
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { showNotification } = useNotifications();

    return (
      <Stack>
        <Notifications />
        <Stack direction="row">
          <Button
            onClick={() =>
              showNotification({
                title: 'Info Notification',
                type: 'info',
                duration: 3000,
                message: 'This is an info notification!',
              })
            }
          >
            Info
          </Button>
          <Button
            onClick={() =>
              showNotification({
                title: 'Success Notification',
                type: 'success',
                duration: 3000,
                message: 'This is a success notification!',
              })
            }
          >
            Success
          </Button>
          <Button
            onClick={() =>
              showNotification({
                title: 'Warning Notification',
                type: 'warning',
                duration: 3000,
                message: 'This is a warning notification!',
              })
            }
          >
            Warning
          </Button>
          <Button
            onClick={() =>
              showNotification({
                title: 'Error Notification',
                type: 'error',
                duration: 3000,
                message: 'This is an error notification!',
              })
            }
          >
            Error
          </Button>
        </Stack>
      </Stack>
    );
  },
};
