import request from './../utils/request';

/**
 * @class BooksModels
 * @description 图书相关的数据来源
 */
class BooksModels {
    constructor() {

    }
    /**
     * @function getBookList
     * @description 获取图书列表
     */
    async getBookList() {
        return request.get('/home/hotGoods', )
    }
}

export default BooksModels;