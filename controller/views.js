export const viewIndex = async ( ctx ) => {
    let title = 'hello koa2'
    await ctx.render('index', {
      title,
    })
}

export const viewList = async ( ctx ) => {
  let title = 'viewList'
  await ctx.render('list', {
    title,
  })
}