import { Center } from '@chakra-ui/react';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';
import { Link } from '@/components/link';
import { Seo } from '@/components/seo';

const LandingPage = () => {
  return (
    <>
      <Seo title="Jobs App" />
      <Center>
        <Button variant="solid" type="button">
          Click Me
        </Button>
        <br />
        <InputField label="Name" />
        <br />
        <Link href="/">Home</Link>
      </Center>
    </>
  );
};

export default LandingPage;
