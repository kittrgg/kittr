import { useEffect } from 'react';

function BackToDashboard() {
  useEffect(() => {
    window.close();
  }, []);

  return (
    <div>
      This window should have closed. If you are seeing this message, you can
      close this window yourself.
    </div>
  );
}

export default BackToDashboard;
