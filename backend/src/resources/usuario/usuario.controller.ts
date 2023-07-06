import { Request, Response } from 'express';

import {
  criarUsuario,
  listarTodosUsuarios,
  listarUsuario,
} from './usuario.services';
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

const read = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuario = await listarUsuario(id);
    if (usuario === null)
      res.status(404).json({ msg: 'Usuario não existe :(' });
    else res.status(200).json(usuario);
  } catch (err) {
    res.status(404).json(err);
  }
};

export default { index, create, read };
