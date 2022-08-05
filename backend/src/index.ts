import Koa from 'koa'
import { port } from './config'
import router from './routes'

const app = new Koa()

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))
