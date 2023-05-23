import { Box, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';

import { useUpdateJob } from '../../api/update-job';
import { Job, UpdateJobData } from '../../types';

export type UpdateJobFormProps = {
  job: Job;
  onSuccess: () => void;
};

export const UpdateJobForm = ({ job, onSuccess }: UpdateJobFormProps) => {
  const updateJob = useUpdateJob({ onSuccess });

  const { register, handleSubmit, formState } = useForm<UpdateJobData>({ defaultValues: { ...job } });

  const onSubmit = (data: UpdateJobData) => {
    updateJob.submit({ id: job.id, data });
  };

  return (
    <Box w="full">
      <Stack as="form" onSubmit={handleSubmit(onSubmit)} w="full" spacing="8">
        <InputField
          label="Position"
          {...register('position', {
            required: 'Required',
          })}
          error={formState.errors['position']}
        />
        <InputField
          label="Department"
          {...register('department', {
            required: 'Required',
          })}
          error={formState.errors['department']}
        />
        <InputField
          label="Location"
          {...register('location', {
            required: 'Required',
          })}
          error={formState.errors['location']}
        />

        <InputField
          type="textarea"
          label="Info"
          {...register('info', {
            required: 'Required',
          })}
          error={formState.errors['info']}
        />

        <Button isDisabled={updateJob.isLoading} isLoading={updateJob.isLoading} type="submit">
          Update Job
        </Button>
      </Stack>
    </Box>
  );
};
