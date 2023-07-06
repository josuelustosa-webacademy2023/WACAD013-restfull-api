import { Router } from 'express';
import usuarioController from './usuario.controller';

const router = Router();

router.post('/create', usuarioController.create);

export default router;
