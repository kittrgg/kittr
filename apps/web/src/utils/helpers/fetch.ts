/* eslint-disable @typescript-eslint/no-explicit-any */
interface GetParams {
	url: string
	headers?: HeadersInit
	signal?: AbortSignal
	redirect?: "follow"
}

const get = async <T>({ url, headers = {}, signal = undefined, redirect }: GetParams): Promise<T> => {
	const requestOptions = {
		method: "GET",
		headers,
		signal,
		redirect
	}

	return await fetch(url, requestOptions).then(handleResponse)
}

interface PostParams {
	url: string
	body?: any
	headers?: HeadersInit
	redirect?: "follow"
}

const post = async <T>({ url, body, headers = {} }: PostParams): Promise<T> => {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json", ...headers },
		body: JSON.stringify(body)
	}

	return await fetch(url, requestOptions).then(handleResponse)
}

interface PutParams {
	url: string
	body: any
	headers?: HeadersInit
}

const put = async <T>({ url, body, headers = {} }: PutParams): Promise<T> => {
	const requestOptions = {
		method: "PUT",
		headers: { "Content-Type": "application/json", ...headers },
		body: JSON.stringify(body)
	}

	return await fetch(url, requestOptions).then(handleResponse)
}

interface DeleteParams {
	url: string
	body?: any
	headers?: HeadersInit
}

// prefixed with underscored because delete is a reserved word in javascript
const _delete = async <T>({ url, body, headers = {} }: DeleteParams): Promise<T> => {
	const requestOptions = {
		method: "DELETE",
		headers,
		body: JSON.stringify(body)
	}
	return await fetch(url, requestOptions).then(handleResponse)
}

// helper functions

const handleResponse = (response: any) => {
	// Uses .text() so that there is no error for an empty response
	return response.text().then((text: any) => {
		const data = text && JSON.parse(text)

		if (response.error || !response.ok) {
			const error = data || response.statusText
			return Promise.reject({ requestedUrl: response.url, error })
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
