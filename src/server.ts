import express from 'express';
import { env } from '../config/env';

const app = express();
const PORT = env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
