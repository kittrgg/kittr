import colors from "@Colors"

/** The Facebook logo. Use fill for color. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Facebook = (props: any) => {
	const { width = "100%", fill = colors.white, dataCy, ...rest } = props

	return (
		<svg width={width} data-cy={dataCy} viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
			<path
				d="M50.4622 0.939453H21.099C9.8775 0.939453 0.780518 10.0363 0.780518 21.2579V50.621C0.780518 61.8426 9.8775 70.9395 21.099 70.9395H36.5111V44.9128H27.6945V33.8919H36.5111V27.2793C36.5111 18.2005 41.6358 11.8502 49.7361 11.8502C53.6153 11.8502 56.3485 11.8502 58.5527 11.8502V22.871H54.1444C49.7405 22.871 47.5318 25.0751 47.5318 29.4836V33.8919H58.5527L56.3485 44.9128H47.5318V70.9395H50.462C61.6837 70.9395 70.7805 61.8426 70.7805 50.621V21.2579C70.7807 10.0364 61.6838 0.939453 50.4622 0.939453Z"
				fill={fill}
			/>
		</svg>
	)
}
