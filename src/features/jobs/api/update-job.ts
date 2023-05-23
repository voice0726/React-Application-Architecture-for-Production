import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

import { Job, UpdateJobData } from '../types';

type UpdateJobOptions = {
  id: string;
  data: UpdateJobData;
};

export const updateJob = ({ id, data }: UpdateJobOptions): Promise<Job> => {
  return apiClient.patch(`/jobs/${id}`, data);
};

type UseUpdateJobOptions = {
  onSuccess?: (job: Job) => void;
};

export const useUpdateJob = ({ onSuccess }: UseUpdateJobOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: updateJob,
    onSuccess: (job) => {
      queryClient.invalidateQueries(['jobs']);
      onSuccess?.(job);
    },
  });

  return { submit, isLoading };
};
