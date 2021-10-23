import CategoryController from '@controllers/CategoryController';
import Router from 'express';

const router = Router();

router.post('/', CategoryController.create)
router.put('/:id', CategoryController.update)

export default router;
