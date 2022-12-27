interface IFunc {
	(params: { width: number; height: number }): string
}

/** An shimmering effect to show as a placeholder for Next.js images. Not quite sure how the parameters work, to be honest... */
export const imageShimmer: IFunc = ({ width, height }) => {
	const shimmer = () => `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#333" />
      <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
    </svg>`

	const toBase64 = (str: string) =>
		typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str)

	return `data:image/svg+xml;base64,${toBase64(shimmer())}`
}
