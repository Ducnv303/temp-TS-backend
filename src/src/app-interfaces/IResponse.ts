import { Response } from "express";

export interface IResponseBody<T = any, V = any> {
	error_code?: number;
	message?: string;
	data?: T;
	errors?: V;
}

export interface IResponse extends Response {
	success?: (res: IResponseBody) => void;
	error?: (res: IResponseBody) => void;
	badreq?: (res: IResponseBody) => void;
	forbidden?: (res: IResponseBody) => void;
	unauth?: (res: IResponseBody) => void;
	internal?: (res: IResponseBody) => void;
}
