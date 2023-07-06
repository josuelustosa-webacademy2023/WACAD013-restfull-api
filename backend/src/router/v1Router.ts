import { Router } from 'express';
import pingRouter from '../resources/ping/ping.router';
import produtoController from '../resources/produto/produto.router';
import usuarioController from '../resources/usuario/usuario.router';

const router = Router();

router.use('/ping', pingRouter);
router.use('/produto', produtoController);
router.use('/usuario', usuarioController);

export default router;
