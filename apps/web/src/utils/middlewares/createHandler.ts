import * as Logger from '@kittr/logger/node';
import nextConnect from 'next-connect';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const createHandler = (...middleware: any[]) => {
	return nextConnect({
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onError: (err, req, res, next) => {
			Logger.logError(err);
			res.statusCode = 500;
			return res.end('Internal Server Error');
		},
	});
};
