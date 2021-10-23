import ClientController from '@controllers/ClientController';
import Router from 'express';

const router = Router();

router.get('/', ClientController.findAll);
router.get('/:id', ClientController.findById);
router.post('/', ClientController.create);
router.put('/:id', ClientController.update);

export default router;
