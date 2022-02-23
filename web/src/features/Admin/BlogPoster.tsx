import { useState } from "react"
import { getToken } from "@Services/firebase/auth/getToken"
import fetch from "@Fetch"

const BlogPoster = ({ ...props }) => {
	const [formData, setFormData] = useState({
		author: "",
		datePublished: "",
		title: "",
		markdown: ""
	})

	const handleChange = (key: string, value: string) => {
		setFormData({
			...formData,
			[key]: value
		})
	}

	const handleSubmit = async () => {
		fetch.post({
			url: `/api/admin/blog`,
			body: JSON.stringify(formData),
			headers: {
				authorization: `Bearer: ${await getToken()}`
			}
		})
	}

	return (
		<>
			<div>
				<label htmlFor="author">Author</label>
				<input
					type="text"
					name="author"
					value={formData.author}
					onChange={(e) => handleChange("author", e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="datePublished">Published Date</label>
				<input
					type="date"
					name="datePublished"
					value={formData.datePublished}
					onChange={(e) => handleChange("datePublished", e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					value={formData.title}
					onChange={(e) => handleChange("title", e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="markdown">Markdown</label>
				<textarea
					name="markdown"
					value={formData.markdown}
					onChange={(e) => handleChange("markdown", e.target.value)}
				/>
			</div>
			<button onClick={handleSubmit}>Submit</button>
		</>
	)
}

export default BlogPoster
