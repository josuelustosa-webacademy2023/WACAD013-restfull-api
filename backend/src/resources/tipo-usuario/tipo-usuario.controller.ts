import { Request, Response } from 'express';
import { listarTiposUsuarios } from './tipo-usuario.services';

const index = async (req: Request, res: Response) => {
  try {
    const tipoUsuarios = await listarTiposUsuarios();
    res.status(200).json(tipoUsuarios);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

export default { index };
