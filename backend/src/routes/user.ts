import Router from '@koa/router'
import UserControllers from '../controllers/user'

const router = new Router()

router.get('/',UserControllers.hello)

export default router