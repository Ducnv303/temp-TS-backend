import { NextFunction, Request } from "express";

export const authentication = async (req: Request, res, next: NextFunction) => {
	try {
		const api_key = req.headers["x-api-key"];

		if (!api_key) {
			return res.unauth({ message: "You're not authorized" });
		}
		if (api_key != 'admin-scree-server-api') {
			return res.unauth({ message: "You're not authorized" });
		}
	} catch (e) {
		console.log(e);
		return res.unauth({ message: "You're not authorized" });
	}
	return next();
};
