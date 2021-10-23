import StockService from '@services/StockService';
import { Request, Response } from 'express';

interface Istock {
  price: number;
  produto: string;
  quantity: number;
}

class StockContoller {
  async findAll(req: Request, res: Response) {
    try {
      const service = StockService;

      const stock = await service.findAll();

      return res.status(200).json(stock);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const service = StockService;

      const stocks = await service.findById(id);

      return res.status(200).json(stocks);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { price, produto, quantity }: Istock = req.body;

      const service = StockService;

      const stock = await service.create(produto, price, quantity);

      return res.status(201).json(stock);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { price, produto, quantity }: Istock = req.body;
      const id = req.params.id;

      const service = StockService;

      const stock = await service.update(id, produto, price, quantity);

      return res.status(200).json(stock);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new StockContoller();
