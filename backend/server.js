var Koa = require('koa');
var Router = require('koa-router');
const bodyParser = require('koa-bodyparser')

var app = new Koa();
var router = new Router();

// app.use(bodyParser)

router.get('/', (ctx, next) => {
  // ctx.router available
    ctx.body = '{code:1 }'

});

router.get('/post/login/', async ctx => {

    // const result = {
    //   userName:ctx.req.query.split('=')[1]
    // }
    // console.log(result)
    // const queryParams = ctx.req
    console.log('---------------', ctx.query)
    let result = ctx.query;
    if(result){
      // 查询数据，并返回结果;
      let db = true;
      if(db){
        console.log('1')
          return ctx.body = {
            code: 1
          }
      }else{
        console.log('0')

        return ctx.body = {
            code: 0
        }
      }
     

    }else{
      console.log('请求结果不存在')
    }
  })


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000);