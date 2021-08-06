import express from 'express';
import setupMiddleware from './middleware';
import setupRoutest from './routes';
import setupSwagger from './config-swagger';

const app = express();
setupSwagger(app);
setupMiddleware(app);
setupRoutest(app);
export default app;
