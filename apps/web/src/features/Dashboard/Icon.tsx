interface Props {
	src: string
	alt: string
}

const Icon = ({ src, alt }: Props) => {
	return <img src={src} alt={alt} style={{ width: "100%", height: "100%" }} />
}

export default Icon
