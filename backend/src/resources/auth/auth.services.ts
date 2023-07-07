import { Usuario } from '../../models/Usuario';
import { LoginDto } from './auth.types';

export const checarCrendenciais = async ({ email, senha }: LoginDto) => {
  const usuario = await Usuario.findOne({ where: { email } });

  if (!usuario) return null;
  const result = await bcrypt.compare(senha, usuario.senha);

  return result ? result : null;
};
