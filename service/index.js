const Koa = require('koa')
const app = new Koa()
const {connect} = require('./database/init.js') //引入connect

//立即执行函数
;(async () =>{
    await connect()
})()


app.use(async(ctx)=>{
  ctx.body = '<h1>hello koa2</h1>'
})
app.listen(3000,()=>{
  console.log('[Service] Starting at port 3000')
})