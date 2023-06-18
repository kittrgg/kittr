'use client';

import { useState } from 'react';

function Page() {
  const [thing, setThing] = useState<any>();

  return (
    <div>
      {thing}
      <button onClick={() => setThing({ throw: 'error' })}>Click me</button>
    </div>
  );
}

export default Page;
