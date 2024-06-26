"use client"
import { Button } from 'antd';
import { useParams, useRouter } from 'next/navigation';

const AuthErrorComponent = () => {
  const router = useRouter()
  const { error } = useParams()

  const errorMessages: Record<string, string> = {
    Configuration: 'There is a problem with the server configuration.',
    AccessDenied: 'You do not have permission to sign in.',
    Verification: 'The sign-in link is no longer valid.',
    Default: 'Unable to sign in.'
  };

  const errorMessage = errorMessages[error as string] || errorMessages.Default;

  return (
    <div className="min-h-[50vh] bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Authentication Error</h1>
        <p className="text-red-500">{errorMessage}</p>
        <div className='mt-2 text-center'>
          <Button onClick={() => router.back()}>Try again</Button>
        </div>
      </div>
    </div>
  );
};

export default AuthErrorComponent;
