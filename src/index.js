import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import routes from './routes';

const PORT = 3015;
const app = koa();

// BODY PARSER
app.use(bodyParser());

// RUTAS
app
  .use(routes.routes())
  .use(routes.allowedMethods());

app.listen(PORT);
console.log(`Open localhost:${PORT}`);
