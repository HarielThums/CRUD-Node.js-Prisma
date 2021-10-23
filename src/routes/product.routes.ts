import ProductController from '@controllers/ProductController';
import Router from 'express';

const router = Router();

router.get('/', ProductController.findAll);
router.get('/:id', ProductController.findById);
router.post('/', ProductController.create);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

export default router;
