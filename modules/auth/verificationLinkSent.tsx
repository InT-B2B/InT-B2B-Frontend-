import React from 'react';
import VerificationLayout from './component/verificationLayout';
import { useAuth } from '@/context/AuthContext';

function VerificationLinkSent() {

  const { formData } = useAuth();

  return (
    <VerificationLayout>
      <div>
          Verification link sent
      </div>
      <div>
        <p>Form Data:</p>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </VerificationLayout>
  )
};

export default VerificationLinkSent;
