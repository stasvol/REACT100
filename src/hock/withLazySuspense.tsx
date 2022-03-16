import React, { Suspense } from 'react';

export function withLazySuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  return (props: WCP) => (
    <Suspense fallback={<div>Loading...</div>}>
      <WrappedComponent {...props} />
    </Suspense>
  );
}
