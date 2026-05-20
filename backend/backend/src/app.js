import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';
import ordersRouter from './routes/orders.js';

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(process.env.PORT || 3001, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3001}`);
});
