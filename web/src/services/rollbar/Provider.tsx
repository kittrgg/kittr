import Head from "@Components/shared/Head"
// @ts-ignore
import { ErrorBoundary, Provider } from "@rollbar/react"
import { Routes } from "@Utils/lookups/routes"
import { ReactNode } from "react"
import Rollbar from "rollbar"
import config from "./config"

const rollbar = new Rollbar(config)
if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
	rollbar.configure({
		checkIgnore: (_, __, payload) => {
			if (
				(payload as any).body.telemetry[(payload as any).body.telemetry.length - 1].body.stack.includes(
					"doubleclick.net"
				)
			) {
				return true
			}

			if (
				(payload as any).body.telemetry.filter(
					(elem: any) => elem.level === "error" && elem.type === "network" && !elem.url.includes("kittr.gg")
				).length > 0
			) {
				return true
			}

			if ((payload as any).trace.frames.filename.includes("mraid.js")) {
				return true
			}

			if ((payload as any).client.javascript.browser.includes("OPR/37")) {
				return true
			}

			return false
		}
	})
}

interface Props {
	children: ReactNode
}

export const RollbarProvider = ({ children }: Props) => {
	return (
		<Provider instance={rollbar} config={config}>
			<ErrorBoundary fallbackUI={ErrorWarning}>{children}</ErrorBoundary>
		</Provider>
	)
}

const ErrorWarning = () => {
	return (
		<div
			style={{
				padding: "36px 0",
				textAlign: "center",
				background: "#1D1D1F",
				color: "white"
			}}
		>
			<Head title="Uh oh. kittr has crashd." description="We're sorry about this" />
			<p>kittr has run into an error.</p>
			<p>This error is being reported to our systems so that we can fix it.</p>
			<p>Lets get you back to the home page.</p>
			<a
				href={Routes.ROOT}
				style={{
					display: "block",
					marginTop: "24px",
					color: "white",
					fontSize: "24px"
				}}
			>
				Back to home.
			</a>
		</div>
	)
}
