import colors from "@Colors"
import { useState } from "react"

/** The Youtube logo. Use fill for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Youtube(props: any) {
	const [isHovered, setIsHovered] = useState(false)

	const { width = "100%", fill = colors.white, colorHover = colors.white, dataCy, ...rest } = props

	return (
		<svg
			data-cy={dataCy}
			fill="none"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			viewBox="0 0 77 60"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				clipRule="evenodd"
				d="M72.9781 5.05258C75.2558 7.57783 75.9968 13.3133 75.9968 13.3133C75.9968 13.3133 76.7568 20.0432 76.7568 26.7756V33.0838C76.7568 39.8162 75.9968 46.5461 75.9968 46.5461C75.9968 46.5461 75.2534 52.2791 72.9781 54.7995C70.3724 57.7837 67.4848 58.0934 65.8538 58.2683C65.6756 58.2874 65.5124 58.3049 65.3663 58.3241C54.7334 59.1602 38.7686 59.1895 38.7686 59.1895C38.7686 59.1895 19.0134 58.992 12.9358 58.3534C12.6481 58.2945 12.2996 58.2485 11.9051 58.1965C9.98038 57.9426 6.9598 57.5441 4.55914 54.7971C2.28152 52.2767 1.54052 46.5437 1.54052 46.5437C1.54052 46.5437 0.780518 39.8162 0.780518 33.0814V26.7731C0.780518 20.0432 1.54052 13.3133 1.54052 13.3133C1.54052 13.3133 2.28389 7.57783 4.55914 5.05258C7.17636 2.05775 10.0735 1.75652 11.701 1.58731C11.8724 1.56949 12.0296 1.55314 12.171 1.53527C22.8015 0.689453 38.7496 0.689453 38.7496 0.689453H38.7853C38.7853 0.689453 54.7334 0.689453 65.3663 1.53527C65.5077 1.55315 65.6651 1.56951 65.8365 1.58733C67.4644 1.75655 70.3632 2.05787 72.9781 5.05258ZM53.0305 29.9395L29.2805 44.5645V15.3145L53.0305 29.9395Z"
				fill={isHovered ? colorHover : fill}
				fillRule="evenodd"
				style={{ transition: ".1s" }}
			/>
		</svg>
	)
}
