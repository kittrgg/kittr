import Ad from "@Services/venatus/Ad"

const AdUnits = () => (
	// const [adColumn, setAdColumn] = useState("none")
	// const [adUnit, setAdUnit] = useState<"d300x250" | "s300x250" | "d728x90" | "s728x90" | "d300x50" | "rmFooter" | "rmVideo" | "rmStickyRight" | undefined>(undefined)

	// useEffect(() => {
	//     if (width < 1200) {
	//         setAdColumn("none")
	//     }

	//     if (width >= 1200) {
	//         setAdColumn("smaller")
	//     }

	//     if (width > 1500) {
	//         setAdColumn("larger")
	//     }
	// }, [width])

	// useEffect(() => {
	//     const largerProbabilities = () => {
	//         const num = Math.random()
	//         // if (num > .7) return "rmVideo"
	//         // if (num > .55) return "rmStickyRight"
	//         // if (num > .15) return "s300x250"
	//         if (num > .5) return "s300x250"
	//         return "d300x250"
	//     }

	//     const smallerProbabilities = () => {
	//         const num = Math.random()
	//         // if (num > .75) return "rmStickyRight"
	//         // if (num > .25) return "s300x250"
	//         if (num > .5) return "s300x250"
	//         return "d300x250"
	//     }

	//     if (adColumn == "larger") {
	//         setAdUnit(largerProbabilities())
	//     } else if (adColumn == "smaller") {
	//         setAdUnit(smallerProbabilities())
	//     } else {
	//         setAdUnit(undefined)
	//     }
	// }, [adColumn])

	// console.log(adUnit)

	<>
		{/* <Ad placementType="d300x250" />
		<Ad placementType="s300x250" containerStyles={{ marginTop: "12px" }} /> */}
	</>
)

export default AdUnits
