import { Router } from 'express';
import tipoUsuarioController from './tipo-usuario.controller';

const router = Router();

router.get('/', tipoUsuarioController.index);

export default router;
