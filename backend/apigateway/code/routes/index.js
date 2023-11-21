import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
const router = express.Router();

// create a proxy for each microservice
//const gamesProxy = createProxyMiddleware({
//  target: 'https://armorgames.com',
//  pathRewrite: {
//    '^/armorGamesApi': '/', // remove base path
//  },
//  changeOrigin: true,
//});

//const questionnaireProxy = createProxyMiddleware({
//  target: 'http://127.0.0.1:3010',
//  secure: false,
//  changeOrigin: true,
//});

//const cheapSharkProxy = createProxyMiddleware({
//  target: 'https://www.cheapshark.com',
//  pathRewrite: {
//    '^/cheapSharkApi': '/', // remove base path
//  },
//  changeOrigin: true,
//});

const proxyTable = {
  '/armorGamesApi': 'https://armorgames.com',
  '/cheapSharkApi': 'https://www.cheapshark.com'
};

const options = {
  router: proxyTable,
  pathRewrite: {
    '^/armorGamesApi': '',
    '^/cheapSharkApi': ''
  },
  changeOrigin: true,
};

const myProxy = createProxyMiddleware(options);

router.get('/', (req, res, next) => {
  res.json('Hi, this is the apigateway');
});

try {
  router.use('/', cors(), myProxy);
} catch (err) {
  console.log(err);
}

//try {
//  router.use('', cors(), gamesProxy);
//} catch (err) {
//  console.log(err);
//}

//try {
//  router.use('/msaccounts', cors(), questionnaireProxy);
//} catch (err) {
//  console.log(err);
//}

//try {
//  router.use('', cors(), cheapSharkProxy);
//} catch (err) {
//  console.log(err);
//}

export { router, myProxy };
