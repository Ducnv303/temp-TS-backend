import { NextFunction, Request } from "express";
import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN_PRIVATE_KEY } from "@app-configs";

export const authentication = async (req: Request, res, next: NextFunction) => {
	try {
		const access_token = req.headers["x-access-token"];

		if (!access_token) {
			return res.unauth({ message: "You're not authorized" });
		}
		const decode: any = await jwt.verify(access_token.toString(), ACCESS_TOKEN_PRIVATE_KEY)
		if (!decode) {
			return res.unauth({ message: "You're not authorized" });
		}
		res.locals.partner_id = decode.data.partner_id;
		res.locals.email = decode.data.email;
		res.locals.user_id = decode.data.user_id;
	} catch (e) {
		console.log(e);
		return res.unauth({ message: "You're not authorized" });
	}
	return next();
};
