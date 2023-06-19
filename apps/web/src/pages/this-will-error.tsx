import { useState } from 'react';

function Page() {
  const [stuff, setStuff] = useState();

  return (
    <div>
      {stuff}
      <button onClick={() => setStuff({ oops: 'Sorry' })}>Click me</button>
    </div>
  );
}

export default Page;
