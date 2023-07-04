import { Router } from 'express';
import pingRouter from '../resources/ping/ping.router';
import produtoController from '../resources/produto/produto.router';

const router = Router();

router.use('/ping', pingRouter);
router.use('/produto', produtoController);

export default router;
