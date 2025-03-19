import express from 'express';

const routes = express.Router();

routes.get('/health', (req, res) => {
  res.json({ message: 'Hello Dev, I am Alive!' });
});

export default routes;
