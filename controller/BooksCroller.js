import BaseCrotroller from './BaseCrotroller';
import BooksModels from '../porxyModels/BooksModels';
const booksModels = new BooksModels();

/**
 * @class BooksCroller
 * @description 图书页面控制
 */
class BooksCroller extends BaseCrotroller {
    constructor() {
        super();
    }
    /**
     * @function actionIndex
     * @param {*} ctx 
     * @param {*} next 
     * @description 渲染首页的view
     */
    async actionIndex(ctx, next) {
        await ctx.render('index')
        await next();
    }
    /**
     * @function actionList
     * @param {*} ctx 
     * @param {*} next 
     * @description 渲染列表的view
     */
    async actionList(ctx, next) {
        const list = await booksModels.getBookList();
        await ctx.render('list', {
            list,
        })
        await next();
    }

    /**
     * @function actionList
     * @param {*} ctx 
     * @param {*} next 
     * @description 渲染列表的view
     */
    async actionAdd(ctx, next) {
        await ctx.render('add')
        await next();
    }
}

export default BooksCroller;