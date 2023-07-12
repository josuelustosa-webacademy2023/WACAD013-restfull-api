import { Produto } from '../../models/Produto';
import { criarProdutoDto, atualizarProdutoDto } from './produto.types';

export const listarProdutos = async (): Promise<Produto[]> => {
  const produtos = await Produto.findAll();
  return produtos.map((p) => p.toJSON());
};

export const criarProduto = async (
  produto: criarProdutoDto,
): Promise<Produto> => {
  return await Produto.create(produto);
};

export const listarProduto = async (id: string): Promise<Produto | null> => {
  return await Produto.findOne({ where: { id } });
};

export const atualizarProduto = async (
  id: string,
  produto: atualizarProdutoDto,
): Promise<number | null> => {
  const prod = await listarProduto(id);
  if (prod === null) return null;

  const [affectedCount] = await Produto.update(produto, { where: { id } });
  return affectedCount;
};

export const deletarProduto = async (id: string): Promise<number | null> => {
  const produtoCadastrado = await listarProduto(id);

  if (produtoCadastrado === null) return null;
  else return await Produto.destroy({ where: { id } });
};
