# Adidas Store

E-commerce fullstack desarrollado con React y Node.js, con diseño inspirado en grandes marcas deportivas.

## Stack

**Frontend**
- React 19 + Vite
- React Router v7
- Context API (carrito de compras)
- CSS custom properties

**Backend**
- Node.js + Express
- Firebase Admin SDK (Firestore)
- CORS configurado por entorno

## Funcionalidades

- Listado de productos con filtro por categoría
- Detalle de producto con selector de talle
- Carrito lateral con animación
- Checkout con generación de orden en Firestore
- Diseño responsive

## Estructura

```
├── src/
│   ├── components/
│   ├── context/
│   └── services/
└── backend/
    └── src/
        ├── routes/
        └── firebase/
```

## Instalación

**Frontend**
```bash
npm install
npm run dev
```

**Backend**
```bash
cd backend
npm install
```

Crear `backend/.env` con las variables de entorno (ver `backend/.env.example`) y luego:

```bash
npm run dev
```
