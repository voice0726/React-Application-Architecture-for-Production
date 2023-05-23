import DashboardUpdateJobPage from '@/pages/dashboard/jobs/[jobId]/update';
import { testData } from '@/testing/test-data';
import { appRender, screen, userEvent, waitFor } from '@/testing/test-utils';

const router = {
  push: jest.fn(),
  query: { jobId: 'wS6UeppUQoiXGTzAI6XrM' },
};

const jobData = testData.jobs[0];

jest.mock('next/router', () => ({
  useRouter: () => router,
}));
jest.mock('@/features/jobs', () => ({
  useJob: () => ({ data: jobData, isLoading: false, isError: false }),
  UpdateJobForm: jest.requireActual('@/features/jobs').UpdateJobForm,
}));

const updated = {
  position: 'Software Engineer',
  location: 'London',
  department: 'Engineering',
  info: 'Lorem Ipsum',
};

describe('Dashboard Update Job Page', () => {
  it('should update a job', async () => {
    appRender(<DashboardUpdateJobPage />);

    const positionInput = screen.getByRole('textbox', {
      name: /position/i,
    });
    expect(positionInput).toHaveValue(jobData.position);

    const locationInput = screen.getByRole('textbox', {
      name: /location/i,
    });
    expect(locationInput).toHaveValue(jobData.location);

    const departmentInput = screen.getByRole('textbox', {
      name: /department/i,
    });
    expect(departmentInput).toHaveValue(jobData.department);

    const infoInput = screen.getByRole('textbox', {
      name: /info/i,
    });
    expect(infoInput).toHaveValue(jobData.info);

    const submitButton = screen.getByRole('button', {
      name: /update/i,
    });

    await userEvent.clear(positionInput);
    await userEvent.type(positionInput, updated.position);
    await userEvent.clear(locationInput);
    await userEvent.type(locationInput, updated.location);
    await userEvent.clear(departmentInput);
    await userEvent.type(departmentInput, updated.department);
    await userEvent.clear(infoInput);
    await userEvent.type(infoInput, updated.info);

    await userEvent.click(submitButton);

    await waitFor(() => expect(screen.getByText(/job updated!/i)).toBeInTheDocument());

    const positionInputUpdated = screen.getByRole('textbox', {
      name: /position/i,
    });
    expect(positionInputUpdated).toHaveValue(updated.position);

    const locationInputUpdated = screen.getByRole('textbox', {
      name: /location/i,
    });
    expect(locationInputUpdated).toHaveValue(updated.location);

    const departmentInputUpdated = screen.getByRole('textbox', {
      name: /department/i,
    });
    expect(departmentInputUpdated).toHaveValue(updated.department);

    const infoInputUpdated = screen.getByRole('textbox', {
      name: /info/i,
    });
    expect(infoInputUpdated).toHaveValue(updated.info);
  });
});
