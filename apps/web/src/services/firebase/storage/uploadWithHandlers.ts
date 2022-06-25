import compressor from "browser-image-compression"
import { upload } from "@Services/firebase/storage/upload"

interface IFunc {
	/**
	 * @params
	 * imageFile: The image file to be uploaded.
	 *
	 * fileName: Name of file to use in Firebase.
	 *
	 * onSuccess: Callback to use on successful upload.
	 *
	 * onError: Callback to use on unsuccessful upload.
	 *
	 * @returns
	 * Promise with array of channels.
	 */
	(params: {
		imageFile: File
		fileName: string
		maxWidthOrHeight?: number
		compressorIterations?: number
		onSuccess: (...args: any) => any
		onError: (...args: any) => any
	}): void
}

/** Utility for uploading an image and handling various states in UI */
export const uploadWithHandlers: IFunc = async ({
	imageFile,
	fileName,
	compressorIterations = 2,
	maxWidthOrHeight = 250,
	onSuccess,
	onError
}) => {
	try {
		const compressedImage = await compressor(imageFile, {
			maxWidthOrHeight,
			maxIteration: compressorIterations
		})

		const result = await upload(fileName, compressedImage)

		if (result) {
			onSuccess()
		}
	} catch (error) {
		onError()
	}
}
