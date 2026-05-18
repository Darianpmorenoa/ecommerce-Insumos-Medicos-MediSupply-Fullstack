import { Router } from 'express';
import userRoutes from './user.routes.js';
import productRoutes from './product.routes.js';
import orderRoutes from './order.routes.js';
import categoryRoutes from './category.routes.js'; 

const router = Router();

// Enlaces a los endpoints de la API
router.use('/usuarios', userRoutes);
router.use('/productos', productRoutes);
router.use('/ordenes', orderRoutes);
router.use('/categorias', categoryRoutes);

export default router;