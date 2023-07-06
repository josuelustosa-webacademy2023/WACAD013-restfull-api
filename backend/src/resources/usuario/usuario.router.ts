import { Router } from 'express';
import usuarioController from './usuario.controller';

const router = Router();

router.get('/', usuarioController.index);
router.post('/create', usuarioController.create);
router.get('/read/:id', usuarioController.read);
router.put('/update/:id', usuarioController.update);
router.delete('/delete/:id', usuarioController.remove);

export default router;
