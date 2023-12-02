import { IResponse } from "@app-interfaces/IResponse";

const httpResponse = (req, res: IResponse, next) => {
	res.success = function ({ data = {}, error_code = 0, message = "success" }) {
		return res.json({
			error_code,
			message,
			data,
		});
	};

	res.error = function ({ error_code = 1, message = "Error" }) {
		return res.json({
			error_code,
			message,
		});
	};

	res.badreq = function ({ errors = {}, error_code = 400, message = "Bad request", data = {} }) {
		return res.status(400).error({ errors, error_code, message, data });
	};

	res.forbidden = function ({ errors = {}, error_code = 403, message = "Forbidden", data = {} }) {
		return res.status(403).error({ errors, error_code, message, data });
	};

	res.unauth = function ({ errors = {}, error_code = 401, message = "Unauth", data = {} }) {
		return res.status(403).error({ errors, error_code, message, data });
	};

	res.internal = function ({ errors = {}, error_code = 500, message = "Internal", data = {} }) {
		return res.status(500).error({ errors, error_code, message, data });
	};

	next();
};

export default httpResponse;
