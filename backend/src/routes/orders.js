import { Router } from 'express';
import { FieldValue } from 'firebase-admin/firestore';
import { db } from '../firebase/config.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { comprador, items, total, cantidad } = req.body;

    if (!comprador?.nombre || !comprador?.email || !items?.length) {
      return res.status(400).json({ error: 'Datos de la orden incompletos' });
    }

    const orden = {
      comprador,
      items,
      total,
      cantidad,
      fecha: FieldValue.serverTimestamp(),
    };

    const docRef = await db.collection('ordenes').add(orden);

    res.status(201).json({ id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la orden' });
  }
});

export default router;
