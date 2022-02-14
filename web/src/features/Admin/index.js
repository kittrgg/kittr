import { useState } from "react"
import { useQuery } from "react-query"
import * as Styled from "./style"
import FullScreen from "@Components/layouts/FullScreen"
import { Selector } from "@Components/shared"

const Admin = ({ ...props }) => {
	const [allBases, setAllBases] = useState([])
	const [allOptions, setAllOptions] = useState([])

	const [activeBase, setActiveBase] = useState({})
	const [activeOptions, setActiveOptions] = useState([])
	const [saving, setSaving] = useState(false)

	useQuery(`/api/kits/allBases`, async () =>
		fetch(`/api/kits/allBases`)
			.then((res) => res.json())
			.then((res) => setAllBases(res))
	)

	useQuery(`/api/kits/allOptions`, async () =>
		fetch(`/api/kits/allOptions`)
			.then((res) => res.json())
			.then((res) => setAllOptions(res))
	)

	const save = () => {
		activeOptions.forEach((elem) => {
			setSaving(true)

			fetch(`/api/admin/kits/addOption`, {
				method: "POST",
				body: JSON.stringify({
					baseId: activeBase._id,
					optionId: elem[0]._id,
					orderPlacement: elem[1]
				})
			})
				.then((res) => res.json())
				.then((res) => setSaving(false))
		})
	}

	return (
		<FullScreen>
			<Styled.VertSplit>
				<Styled.HorzSplit siblings={2}>
					{allBases
						.sort((a, b) => {
							if (a.displayName < b.displayName) return -1
							if (a.displayName > b.displayName) return 1
							return 0
						})
						.map((elem) => (
							<Styled.Button
								key={elem._id}
								onClick={() => {
									setActiveOptions([])
									setActiveBase(elem)
								}}
							>
								{elem.displayName}
							</Styled.Button>
						))}
				</Styled.HorzSplit>
				<Styled.HorzSplit siblings={2}>
					<Styled.Heading>Summary</Styled.Heading>
					{saving && <p>saving...</p>}
					{!saving && <Styled.Button onClick={save}>Save</Styled.Button>}
					<Styled.Heading>Base</Styled.Heading>
					<p>{activeBase.displayName}</p>
					<Styled.Heading>Attachments</Styled.Heading>
					{activeOptions.map((elem, index) => {
						return (
							<div key={elem[0]._id}>
								<span>{elem[0].displayName}</span>
								<input
									type="text"
									style={{ width: "36px", marginLeft: "24px" }}
									value={elem[1]}
									onChange={(e) => {
										let options = [...activeOptions]

										options[index] = [activeOptions[index][0], e.target.value]

										setActiveOptions(options)
									}}
								/>
							</div>
						)
					})}
				</Styled.HorzSplit>
			</Styled.VertSplit>
			<Styled.VertSplit style={{ display: "block", overflowY: "scroll" }}>
				{[
					"Muzzle",
					"Barrel",
					"Optic",
					"Stock",
					"Underbarrel",
					"Trigger Action",
					"Magazine",
					"Ammo Type",
					"Rear Grip",
					"Perk 1",
					"Perk 2"
				].map((slot) => {
					return (
						<div style={{ marginTop: "32px" }} key={slot}>
							<Styled.Heading>{slot}</Styled.Heading>
							<Selector
								style={{ top: "initial" }}
								isSearchable
								onChange={(elem) => {
									console.log(elem)
									setActiveOptions([...activeOptions, [elem.value, ""]])
								}}
								options={allOptions
									.filter((elem) => elem.slotKey === slot)
									.sort((a, b) => {
										if (a.displayName < b.displayName) return -1
										if (a.displayName > b.displayName) return 1
										return 0
									})
									.map((elem) => ({
										label: elem.displayName,
										value: elem
									}))}
							/>
						</div>
					)
				})}
			</Styled.VertSplit>
		</FullScreen>
	)
}

export default Admin
