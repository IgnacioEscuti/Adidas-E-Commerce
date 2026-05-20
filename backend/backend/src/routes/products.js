import { Router } from 'express';
import { db } from '../firebase/config.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { categoria } = req.query;
    let query = db.collection('productos');
    if (categoria) query = query.where('categoria', '==', categoria);
    const snapshot = await query.get();
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const doc = await db.collection('productos').doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto' });
  }
});

export default router;
