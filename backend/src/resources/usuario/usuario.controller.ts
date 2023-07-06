import { Request, Response } from 'express';

import { criarUsuario, listarTodosUsuarios } from './usuario.services';
import { criarUsuarioDto } from './usuario.types';
import { Usuario } from '../../models/Usuario';

const index = async (req: Request, res: Response) => {
  try {
    const usuarios = await listarTodosUsuarios();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

const create = async (req: Request, res: Response) => {
  const usuario: criarUsuarioDto = req.body;

  try {
    const novoUsuario = await criarUsuario(usuario);
    res.status(201).json(novoUsuario);
  } catch (err) {
    return await Usuario.create(usuario);
  }
};

export default { index, create };
