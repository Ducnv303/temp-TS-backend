import { PATH_LOG } from '../app-configs';
import { createLogger } from 'container-logger';



export const appLogger = createLogger("ScreeHavin", "API-Server", PATH_LOG);


export const paginate = (page: number = 0, page_size: number = 10) => {
    if (page == -1) {
        return {};
    }
    const offset: number = page * page_size;
    const limit: number = parseInt(page_size.toString());
    return {
        offset,
        limit,
    };
};

export const changeAliasNameRouter = alias => {
    let str = alias;
    if (alias) {
        str = str.toLowerCase();
        str = str.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a");
        str = str.replace(/[èéẹẻẽêềếệểễ]/g, "e");
        str = str.replace(/[ìíịỉĩ]/g, "i");
        str = str.replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o");
        str = str.replace(/[ùúụủũưừứựửữ]/g, "u");
        str = str.replace(/[ỳýỵỷỹ]/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/v1/g, "");
        str = str.replace(/api/g, "");
        str = str.replace(/[/]/g, " ");
        str = str.replace(/[-]/g, " ");
    }

    return str;
};
