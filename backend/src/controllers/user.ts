import Koa from "koa"

class UserController {
    hello(ctx:Koa.Context){
      ctx.body = 'hello'
    }
}

export default new UserController()