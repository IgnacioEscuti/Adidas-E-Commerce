import { Router } from 'express';
import { db } from '../firebase/config.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { categoria } = req.query;
    let ref = db.collection('items');

    if (categoria) {
      ref = ref.where('categoria', '==', categoria);
    }

    const snapshot = await ref.get();
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const doc = await db.collection('items').doc(req.params.id).get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});

export default router;
