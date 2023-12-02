import { NextFunction, Request } from "express";
import firebase from "@app-configs/firebase";

export const firebaseAuthentication = async (req: Request, res, next: NextFunction) => {
	try {
		const token_firebase = req.headers["x-authorization"];

		if (!token_firebase) {
			return res.unauth({ message: "You're not authorized" });
		}
		await firebase
			.auth()
			.verifyIdToken(token_firebase.toString())
			.then((data) => {
				res.locals.email = data.email;
			})
			.catch((e) => {
				throw new Error(e);
			});
	} catch (e) {
		console.log(e);
		return res.unauth({ message: "You're not authorized" });
	}
	return next();
};
