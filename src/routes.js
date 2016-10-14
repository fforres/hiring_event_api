/* eslint require-yield: 1 */
import koaRouter from 'koa-router';
import skills from 'skills';
import { getTagsByName, saveNewUser } from './model';

const router = koaRouter();

router.get('/', function* () {
  this.body = 'Hello World!';
});

router.get('/tags', function* () {
  this.body = skills;
});

router.get('/tagsByString', function* () {
  this.body = yield getTagsByName(decodeURI(this.request.query.searchString) || '');
});

router.post('/linkedin', function* () {
  this.body = yield saveNewUser(this.request.body);
});

export default router;
