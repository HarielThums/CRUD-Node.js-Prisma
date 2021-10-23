import Router from 'express';
import CategoryRoutes from './category.routes';
import ClientRoutes from './client.routes';
import StockRoutes from './stock.routes';
import ProductRoutes from './product.routes';
import SaleRoutes from './sale.routes';

const router = Router();

router.use('/category', CategoryRoutes);
router.use('/client', ClientRoutes);
router.use('/stock', StockRoutes);
router.use('/product', ProductRoutes);
router.use('/sale', SaleRoutes);

export default router;
