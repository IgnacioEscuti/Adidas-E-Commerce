import { Router } from 'express';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const router = Router();

router.post('/', async (req, res) => {
  const { comprador, items, total, cantidad } = req.body;

  if (!comprador?.nombre || !comprador?.email || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: 'Datos de la orden incompletos' });
  }

  try {
    const db = getFirestore();
    const docRef = await db.collection('ordenes').add({
      comprador,
      items,
      total,
      cantidad,
      fecha: FieldValue.serverTimestamp(),
    });
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la orden' });
  }
});

export default router;
