import { Request, Response, NextFunction } from 'express';
import { TiposUsuarios } from '../resources/tipo-usuario/tipo-usuario.constants';

const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.tipoUsuarioId === TiposUsuarios.ADMIN) next();
  else res.status(401).json({ msg: 'Você não tem permissão essa ação' });
};

export default checkAdmin;
