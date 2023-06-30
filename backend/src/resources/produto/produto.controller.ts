import { Request, Response } from 'express';
import {
  createProduto,
  getAllProdutos,
  getProduto,
  updateProduto,
} from './produto.services';
import { createProdutoDto } from './produto.types';
import { Produto } from '../../models/Produto';

const index = async (req: Request, res: Response) => {
  try {
    const produtos = await getAllProdutos();
    res.status(200).json(produtos);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

const create = async (req: Request, res: Response) => {
  const produto: createProdutoDto = req.body;
  try {
    const newProduto = await createProduto(produto);
    res.status(201).json(newProduto);
  } catch (err) {
    return await Produto.create(produto);
  }
};

const read = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const produto = await getProduto(id);
    if (produto === null)
      res.status(404).json({ msg: 'Produto não existe :(' });
    else res.status(200).json(produto);
  } catch (err) {
    res.status(404).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const produto = req.body;

  try {
    const result = await updateProduto(id, produto);
    if (result === null) res.status(404).json({ msg: 'Produto não existe :(' });
    else res.status(200).json({ msg: 'Produto atualizado :)' });
  } catch (err) {
    res.status(500).json(err);
  }
};

const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
