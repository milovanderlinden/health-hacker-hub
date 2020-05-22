const admin = require('firebase-admin');
var serviceAccount = require("./serviceAccountKey.json");

const serverless = require('serverless-http');
const Koa = require('koa'); 
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

//firebase-adminsdk-45qby@hacker-hub.iam.gserviceaccount.com
if(!admin.apps.length){
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hacker-hub.firebaseio.com"
  });
}

const db = admin.firestore()

const app = new Koa();

const router = new Router();

router
  .get('/.netlify/functions/api/account', (ctx, next) => {
    ctx.body = 'hello user'
  })
  .get('/.netlify/functions/api/users/', (ctx, next) => {
    ctx.body = 'hello users'
  })
  .post('/.netlify/functions/api/users/', async (ctx, next) => {
    await db.collection('users').add(ctx.request.body)
    ctx.body = {
      status: 'success',
      json: ctx.request.body.json
    }
  })

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

module.exports.handler = serverless(app);

/*  TODO: see if this is useful:
   const handler = serverless(app);

   module.exports.handler = async (event, context, callback) => {

   // you can do other things here
   const result = await handler(event, context);
   // and here
   return result;
   };
 */
