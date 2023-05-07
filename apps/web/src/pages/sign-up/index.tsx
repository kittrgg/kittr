import Head from '@Components/shared/Head';
import { useUser } from '@Hooks/useUser';
import { Routes } from '@Utils/lookups/routes';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SignUpForm from '../../features/SignUpForm';

function SignUp() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user) {
      router.push(Routes.DASHBOARD);
    }
  }, [user, router]);

  return (
    <>
      <Head
        description="Create your account on kittr."
        title="Create Your Account | kittr"
      />
      <SignUpForm />
    </>
  );
}

export default SignUp;
