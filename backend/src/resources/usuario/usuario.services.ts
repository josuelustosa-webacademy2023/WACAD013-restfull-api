import { Usuario } from '../../models/Usuario';
import { criarUsuarioDto } from './usuario.types';

export const criarUsuario = async (
  usuario: criarUsuarioDto,
): Promise<Usuario> => {
  return await Usuario.create(usuario);
};

export const listarTodosUsuarios = async (): Promise<Usuario[]> => {
  const usuarios = await Usuario.findAll();
  return usuarios.map((p) => p.toJSON());
};
