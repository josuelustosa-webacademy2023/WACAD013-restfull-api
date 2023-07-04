import { Router } from 'express';
import produtoController from './produto.controller';

const router = Router();

router.get('/', produtoController.index);
router.post('/create', produtoController.create);
router.get('/read/:id', produtoController.read);
router.put('/update/:id', produtoController.update);
router.delete('delete/:id', produtoController.remove);

export default router;
