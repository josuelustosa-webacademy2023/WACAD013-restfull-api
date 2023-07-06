import { Usuario } from '../../models/Usuario';
import { criarUsuarioDto } from './usuario.types';

export const criarUsuario = async (
  usuario: criarUsuarioDto,
): Promise<Usuario> => {
  return await Usuario.create(usuario);
};
