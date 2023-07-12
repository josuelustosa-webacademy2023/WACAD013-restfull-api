import { Produto } from '../../models/Produto';

export type criarProdutoDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>;
export type atualizarProdutoDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>;
