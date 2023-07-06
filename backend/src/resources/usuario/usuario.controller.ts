import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import {
  criarUsuario,
  listarTodosUsuarios,
  listarUsuario,
  atualizarUsuario,
  deletarUsuario,
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
    const salt = await bcrypt.genSalt(10);
    const senhaComHash = await bcrypt.hash(usuario.senha, salt);
    usuario.senha = senhaComHash;

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
      res.status(404).json({ msg: 'Usuário não existe :(' });
    else res.status(200).json(usuario);
  } catch (err) {
    res.status(404).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const senhaComHash = await bcrypt.hash(usuario.senha, salt);
    usuario.senha = senhaComHash;

    const result = await atualizarUsuario(id, usuario);
    if (result === null) res.status(404).json({ msg: 'Usuário não existe :(' });
    else res.status(200).json({ msg: 'Usuário atualizado :)' });
  } catch (err) {
    res.status(500).json(err);
  }
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuario = await deletarUsuario(id);

    if (usuario === null)
      res.status(404).json({ msg: 'Usuário não existe :(' });
    else res.status(200).json({ msg: 'Usuário deletado :)' });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default { index, create, read, update, remove };
