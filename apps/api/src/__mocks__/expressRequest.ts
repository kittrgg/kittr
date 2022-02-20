import { Request } from "express"
import { MediaType } from "express-serve-static-core"

interface MockIncomingMessage {
	aborted?: boolean
	httpVersion?: string
	httpVersionMajor?: number
	httpVersionMinor?: number
	complete?: boolean
	connection?: any
	socket?: any
	headers?: any
	rawHeaders?: string[]
	trailers?: { [key: string]: string | undefined }
	rawTrailers?: string[]
	setTimeout?: any
	statusCode?: number
	statusMessage?: string
	destroy?: any
}

export interface MockRequest extends MockIncomingMessage {
	params?: any
	query?: any
	body?: any
	cookies?: any
	method?: string
	protocol?: string
	secure?: boolean
	ip?: string
	ips?: string[]
	subdomains?: string[]
	path?: string
	hostname?: string
	host?: string
	fresh?: boolean
	stale?: boolean
	xhr?: boolean
	route?: any
	signedCookies?: any
	originalUrl?: string
	url?: string
	baseUrl?: string
	accepted?: MediaType[]
	get?: any
	header?: any
	accepts?: any
	acceptsCharsets?: any
	acceptsEncodings?: any
	acceptsLanguages?: any
	range?: any
	param?: any
	is?: any
	app?: any
	res?: any
	next?: any
	// allow custom properties to be provided
	[key: string]: any
}

export const getMockReq = <T extends Request>(values: MockRequest = {}): T => {
	const {
		params = {},
		query = {},
		body = {},
		cookies = {},
		method = "",
		protocol = "",
		secure = false,
		ip = "",
		ips = [],
		subdomains = [],
		path = "",
		hostname = "",
		host = "",
		fresh = false,
		stale = false,
		xhr = false,
		route = {},
		signedCookies = {},
		originalUrl = "",
		url = "",
		baseUrl = "",
		accepted = [],
		get = jest.fn().mockName("get mock default"),
		header = jest.fn().mockName("header mock default"),
		accepts = jest.fn().mockName("accepts mock default"),
		acceptsCharsets = jest.fn().mockName("acceptsCharsets mock default"),
		acceptsEncodings = jest.fn().mockName("acceptsEncodings mock default"),
		acceptsLanguages = jest.fn().mockName("acceptsLanguages mock default"),
		range = jest.fn().mockName("range mock default"),
		param = jest.fn().mockName("param mock default"),
		is = jest.fn().mockName("is mock default"),
		app = {},
		res = jest.fn().mockName("res mock default"),
		next = jest.fn().mockName("next mock default"),
		aborted = false,
		httpVersion = "",
		httpVersionMajor = 0,
		httpVersionMinor = 0,
		complete = false,
		connection = {},
		socket = {},
		headers = {},
		rawHeaders = [],
		trailers = {},
		rawTrailers = [],
		setTimeout = jest.fn().mockName("setTimeout mock default"),
		statusCode = 0,
		statusMessage = "",
		destroy = jest.fn().mockName("destroy mock default"),
		...extraProvidedValues
	} = values

	return {
		params,
		query,
		body,
		cookies,
		method,
		protocol,
		secure,
		ip,
		ips,
		subdomains,
		path,
		hostname,
		host,
		fresh,
		stale,
		xhr,
		route,
		signedCookies,
		originalUrl,
		url,
		baseUrl,
		accepted,
		get,
		header,
		accepts,
		acceptsCharsets,
		acceptsEncodings,
		acceptsLanguages,
		range,
		param,
		is,
		app,
		res,
		next,

		// http - IncomingMessage
		aborted,
		httpVersion,
		httpVersionMajor,
		httpVersionMinor,
		complete,
		connection,
		socket,
		headers,
		rawHeaders,
		trailers,
		rawTrailers,
		setTimeout,
		statusCode,
		statusMessage,
		destroy,

		// custom values
		...extraProvidedValues
	} as T
}

export default getMockReq
