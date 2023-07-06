import { Router } from 'express';
import usuarioController from './usuario.controller';

const router = Router();

router.get('/', usuarioController.index);
router.post('/create', usuarioController.create);

export default router;
