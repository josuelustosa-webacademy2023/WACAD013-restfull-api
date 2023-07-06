import { TipoUsuario } from '../../models/TipoUsuario';

export const listarTiposUsuarios = async (): Promise<TipoUsuario[]> => {
  const tipoUsuarios = await TipoUsuario.findAll();
  return tipoUsuarios.map((t) => t.toJSON());
};
