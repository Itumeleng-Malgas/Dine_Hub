import React, { Suspense, ReactNode } from 'react';

interface WithSuspenseProps {
  fallback?: ReactNode;
  children: ReactNode;
}

const WithSuspense: React.FC<WithSuspenseProps> = ({ fallback = <div className="initial__loading" />, children }) => {
  return (
    <Suspense fallback={fallback}>
      <div className="fade-in-from-top">
        {children}
      </div>
    </Suspense>
  );
};

export default WithSuspense;