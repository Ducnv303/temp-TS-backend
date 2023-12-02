import { Request } from "express";

export interface IRequestId<Body = any, Query = any> extends Request<{ id: number }, void, Body, Query> {}
