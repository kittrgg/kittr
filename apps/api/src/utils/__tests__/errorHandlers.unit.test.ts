import { NextFunction, Request, Response } from "express"
import { errorHandler, ResponseError } from "../errorHandlers"

describe("errorHandler", () => {
	it("sends error for ResponseErrors", () => {
		const mockResponse: Partial<Response> = {
			json: jest.fn(),
			status: jest.fn().mockReturnThis()
		}
		const nextFunction: NextFunction = jest.fn()

		errorHandler(
			new ResponseError("some test error", { statusCode: 500, info: "some testing info" }),
			{} as Request,
			mockResponse as Response,
			{} as any
		)

		expect(mockResponse.status).toHaveBeenCalledWith(500)
		expect(mockResponse.json).toHaveBeenCalledWith({
			error: "some test error",
			errorInfo: "some testing info"
		})
		expect(nextFunction).not.toHaveBeenCalled()
	})

	it("sends error for other errors", () => {
		const mockResponse: Partial<Response> = {
			json: jest.fn(),
			status: jest.fn().mockReturnThis()
		}
		const nextFunction: NextFunction = jest.fn()

		errorHandler(new Error("some test error"), {} as Request, mockResponse as Response, nextFunction)

		expect(mockResponse.status).toHaveBeenCalledWith(500)
		expect(mockResponse.json).toHaveBeenCalledWith({ error: "some test error" })
		expect(nextFunction).not.toHaveBeenCalled()
	})
})
