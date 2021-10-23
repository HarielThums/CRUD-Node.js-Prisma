import SaleController from '@controllers/SaleController';
import Router from 'express';

const router = Router();

router.get('/', SaleController.findAll);
router.get('/:id', SaleController.findById);
router.post('/', SaleController.create);
router.put('/:id', SaleController.update);

export default router;
