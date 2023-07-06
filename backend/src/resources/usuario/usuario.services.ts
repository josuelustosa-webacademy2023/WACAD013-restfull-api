import { Usuario } from '../../models/Usuario';
import { atualizarUsuarioDto, criarUsuarioDto } from './usuario.types';

export const criarUsuario = async (
  usuario: criarUsuarioDto,
): Promise<Usuario> => {
  return await Usuario.create(usuario);
};

export const listarTodosUsuarios = async (): Promise<Usuario[]> => {
  const usuarios = await Usuario.findAll();
  return usuarios.map((p) => p.toJSON());
};

export const listarUsuario = async (id: string): Promise<Usuario | null> => {
  return await Usuario.findOne({ where: { id } });
};

export const atualizarUsuario = async (
  id: string,
  usuario: atualizarUsuarioDto,
): Promise<number | null> => {
  const usuarioId = await listarUsuario(id);
  if (usuarioId === null) return null;

  const [affectedCount] = await Usuario.update(usuario, { where: { id } });
  return affectedCount;
};
