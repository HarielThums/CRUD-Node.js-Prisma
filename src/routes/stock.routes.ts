import StockController from '@controllers/StockController';
import Router from 'express';

const router = Router();

router.get('/', StockController.findAll);
router.get('/:id', StockController.findById);
router.post('/', StockController.create);
router.put('/:id', StockController.update);


export default router;
