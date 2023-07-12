import { Request, Response } from 'express';
import { criarUsuario } from '../usuario/usuario.services';
import { buscarUsuarioPorEmail } from '../tipo-usuario/tipo-usuario.services';
import { TiposUsuarios } from '../tipo-usuario/tipo-usuario.constants';
import { checarCrendenciais } from './auth.services';

const signup = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;

  try {
    const usuario = await buscarUsuarioPorEmail(email);

    if (usuario)
      return res
        .status(400)
        .json({ msg: 'Já existe um usuario cadastrado com esse email' });

    const newUsuario = criarUsuario({
      nome,
      email,
      senha,
      tipoUsuarioId: TiposUsuarios.CLIENTE,
    });
    res.status(200).json(newUsuario);
  } catch (erro) {
    res.status(500).json(erro);
  }
};

const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  try {
    const usuario = await checarCrendenciais({ email, senha });
    if (!usuario)
      return res
        .status(401)
        .json({ msg: 'Email ou Usuário estão incorretos :(' });
    req.session.uid = usuario.uid;
    req.session.tipoUsuarioId = usuario.tipoUsuarioId;
    res.status(200).json({ msg: 'Usuário logou com sucesso' });
  } catch (erro) {
    res.status(500).json(erro);
  }
};

const logout = (req: Request, res: Response) => {
  if (req.session.uid) {
    req.session.destroy((erro) => {
      if (erro) return res.status(500).json;
    });
  }
};

export default { signup, login, logout };
