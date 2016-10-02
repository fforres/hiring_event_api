/* eslint require-yield: 1 */
import koaRouter from 'koa-router';

const router = koaRouter();

router.get('/', function* () {
  this.body = 'Hello World!';
});
router.post('/linkedin', '/linkedin/:user_id/', function* () {
  console.log(this.params);
  console.log(this.request.body);
  this.body = 'wazaaa';
});

export default router;
