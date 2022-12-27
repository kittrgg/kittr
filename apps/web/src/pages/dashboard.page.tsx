import Head from "@Components/shared/Head"
import Dashboard from "@Features/Dashboard"
import { useContext, createContext } from "react"
import { io, Socket as TSocket } from "socket.io-client"

const Socket = createContext<TSocket | null>(null)

export const useSocket = () => useContext(Socket)

const Dash = () => (
	<Socket.Provider value={io(process.env.NEXT_PUBLIC_SOCKET_HOST as string)}>
		<Head title="Dashboard | kittr" description="Your portal to kit greatness." />
		<Dashboard />
	</Socket.Provider>
)

export default Dash
