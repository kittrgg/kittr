interface Props {
	src: string
	alt: string
}

function Icon({ src, alt }: Props) {
	return <img alt={alt} src={src} style={{ width: "100%", height: "100%" }} />
}

export default Icon
