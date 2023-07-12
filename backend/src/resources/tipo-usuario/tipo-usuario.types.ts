import { TipoUsuario } from "../../models/TipoUsuario";

export type criarTipoUsuarioDto = Pick<TipoUsuario, 'rotulo'>;
export type atualizarTipoUsuarioDto = Pick<TipoUsuario, 'rotulo'>;
