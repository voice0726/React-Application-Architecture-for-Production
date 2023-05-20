import DashboardCreateJobPage from '@/pages/dashboard/jobs/create';
import { appRender, screen, userEvent, waitFor } from '@/testing/test-utils';

const router = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => router,
}));

const jobData = {
  position: 'Software Engineer',
  location: 'London',
  department: 'Engineering',
  info: 'Lorem Ipsum',
};

describe('Dashboard Create Job Page', () => {
  it('should create a new job', async () => {
    appRender(<DashboardCreateJobPage />);

    const positionInput = screen.getByRole('textbox', {
      name: /position/i,
    });

    const locationInput = screen.getByRole('textbox', {
      name: /location/i,
    });

    const departmentInput = screen.getByRole('textbox', {
      name: /department/i,
    });

    const infoInput = screen.getByRole('textbox', {
      name: /info/i,
    });

    const submitButton = screen.getByRole('button', {
      name: /create/i,
    });

    await userEvent.type(positionInput, jobData.position);
    await userEvent.type(locationInput, jobData.location);
    await userEvent.type(departmentInput, jobData.department);
    await userEvent.type(infoInput, jobData.info);

    await userEvent.click(submitButton);

    await waitFor(() => expect(screen.getByText(/job created!/i)).toBeInTheDocument());
  });
});
