import Head from '@Components/shared/Head';
import Dashboard from '@Features/Dashboard';
import { useContext, createContext } from 'react';
import type { Socket as TSocket } from 'socket.io-client';
import { io } from 'socket.io-client';

const Socket = createContext<TSocket | null>(null);

export const useSocket = () => useContext(Socket);

function Dash() {
  return (
    <Socket.Provider value={io(process.env.NEXT_PUBLIC_SOCKET_HOST!)}>
      <Head
        description="Your portal to kit greatness."
        title="Dashboard | kittr"
      />
      <Dashboard />
    </Socket.Provider>
  );
}

export default Dash;
