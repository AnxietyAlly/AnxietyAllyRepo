import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
const router = express.Router();

// create a proxy for each microservice
const accountProxy = createProxyMiddleware({
  target: 'http://msaccounts:3010',
  changeOrigin: true,
});

router.use('/accounts', cors(), accountProxy);

export default router;
