const baseUri = process.env.NEXT_PUBLIC_API_PATH

const get = async (url: string) => {
	const requestOptions = {
		method: "GET"
	}
	return await fetch(baseUri + url, requestOptions).then(handleResponse)
}

const post = async (url: string, body: any) => {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	}
	return await fetch(baseUri + url, requestOptions).then(handleResponse)
}

const put = async (url: string, body: any) => {
	const requestOptions = {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	}
	return await fetch(baseUri + url, requestOptions).then(handleResponse)
}

// prefixed with underscored because delete is a reserved word in javascript
const _delete = async (url: string) => {
	const requestOptions = {
		method: "DELETE"
	}
	return await fetch(baseUri + url, requestOptions).then(handleResponse)
}

// helper functions

const handleResponse = (response: any) => {
	// Uses .text() so that there is no error for an empty response
	return response.text().then((text: any) => {
		const data = text && JSON.parse(text)

		if (!response.ok) {
			const error = data || response.statusText
			return Promise.reject(error)
		}

		return data
	})
}

const handler = {
	get,
	post,
	put,
	delete: _delete
}

export default handler
