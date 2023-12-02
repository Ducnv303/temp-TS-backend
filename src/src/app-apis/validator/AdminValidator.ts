import { body, param, query } from "express-validator";

class CmsValidator {

	noValidator() {
        return [
        ];
    }
}

export default new CmsValidator();
