import { Request, Response } from 'express';

import { criarUsuario } from './usuario.services';
import { criarUsuarioDto } from './usuario.types';
import { Usuario } from '../../models/Usuario';

const create = async (req: Request, res: Response) => {
  const usuario: criarUsuarioDto = req.body;

  try {
    const novoUsuario = await criarUsuario(usuario);
    res.status(201).json(novoUsuario);
  } catch (err) {
    return await Usuario.create(usuario);
  }
};

export default { create };
