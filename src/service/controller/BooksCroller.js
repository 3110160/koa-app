import BaseCrotroller from "./BaseCrotroller";
import BooksModels from "../porxyModels/BooksModels";
const booksModels = new BooksModels();
const { readFile } = require("fs");
const { join } = require("path");

const asyncReadFile = path => {
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

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
    await ctx.render("books/pages/index");
    await next();
  }
  /**
   * @function actionList
   * @param {*} ctx
   * @param {*} next
   * @description 渲染列表的view
   */
  async actionList(ctx, next) {
    const goods = await booksModels.getBookList();
    await ctx.render("demo", {
      goods,
      title: "测试"
    });
    await next();
  }

  /**
   * @function actionList
   * @param {*} ctx
   * @param {*} next
   * @description 渲染列表的view
   */
  async actionAdd(ctx, next) {
    await ctx.render("books/pages/add");
    await next();
  }

  /**
   * @function actionShowPoetry
   * @param {*} ctx
   * @param {*} next
   * @description 渲染诗句的view
   */
  async actionShowPoetry(ctx, next) {
    const id =
      +ctx.params.id > 10 ? Math.ceil(Math.random(0, 1) * 10) : +ctx.params.id;
    const data = await asyncReadFile(
      join(__dirname, "../", `/poetry/poetry${id}.txt`)
    );
    await ctx.render("poetry", {
      data
    });
    await next();
  }
}

export default BooksCroller;
