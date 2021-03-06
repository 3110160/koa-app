import {demoGet} from '../porxyModels/demo';

export const viewIndex = async ( ctx ) => {
    let title = 'hello koa2'
    await ctx.render('index', {
      title,
    })
}
export const viewDemo = async ( ctx ) => {
  let title = 'demo'
  const goods = await demoGet();
  await ctx.render('demo', {
    title,
    goods,
  })
}

export const viewList = async ( ctx ) => {
  const list = [{
    bookName:'书名1',
    author:'李白',
    creatTime:'2017-12-22',
  }]
  await ctx.render('list', {
    list,
    title:'viewList',
  })
}

export const viewAdd = async ( ctx ) => {
  await ctx.render('add', {
    title:'viewAdd',
  })
}