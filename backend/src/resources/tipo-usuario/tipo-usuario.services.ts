import { TipoUsuario } from '../../models/TipoUsuario';
import { Usuario } from '../../models/Usuario';

export const listarTiposUsuarios = async (): Promise<TipoUsuario[]> => {
  const tipoUsuarios = await TipoUsuario.findAll();
  return tipoUsuarios.map((t) => t.toJSON());
};

export const buscarUsuarioPorEmail = async (
  email: string,
): Promise<Usuario[] | null> => {
  return [];
};
