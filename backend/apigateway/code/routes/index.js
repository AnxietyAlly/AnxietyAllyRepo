import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
const router = express.Router();

const proxyTable = {
  '/questionnaireApi': 'http://questionnaire:3012',
  '/accountsApi': 'http://msaccounts:3011'
};

const options = {
  router: proxyTable,
  pathRewrite: {
    '^/questionnaireApi': '',
    '^/accountsApi': ''
  },
  changeOrigin: true,
};

const myProxy = createProxyMiddleware(options);

router.get('/', cors(), (req, res, next) => {
  res.json('Hi, this is the apigateway');
});

try {
  router.use('/', cors(), myProxy);
} catch (err) {
  console.log(err);
}

export { router, myProxy };
