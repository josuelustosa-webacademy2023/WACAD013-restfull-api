import { Usuario } from '../../models/Usuario';

export type criarUsuarioDto = Pick<Usuario, 'nome' | 'email' | 'senha' | 'tipoUsuarioId'>;
export type atualizarUsuarioDto = Pick<Usuario, 'nome' | 'email' | 'senha' | 'tipoUsuarioId'>;
