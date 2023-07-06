import { Usuario } from '../../models/Usuario';
import { createUsuarioDto } from './usuario.types';

export const criarUsuario = async (
  usuario: createUsuarioDto,
): Promise<Usuario> => {
  return await Usuario.create(usuario);
};
