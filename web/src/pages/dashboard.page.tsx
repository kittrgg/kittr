import Head from "@Components/shared/Head"
import Dashboard from "@Features/Dashboard"

import { useContext, createContext } from "react"
import { io } from "socket.io-client"

const Socket = createContext(null as any)

export const useSocket = () => {
	return useContext(Socket)
}

const Dash = () => {
	return (
		<Socket.Provider value={io(process.env.NEXT_PUBLIC_SOCKET_HOST as string)}>
			<Head title="Dashboard | kittr" description="Your portal to kit greatness." />
			<Dashboard />
		</Socket.Provider>
	)
}

export default Dash
