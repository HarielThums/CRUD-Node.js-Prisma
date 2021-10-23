import SaleService from '@services/SaleService';
import { Request, Response } from 'express';

interface Isale {
  code: number;
  value: string;
  saleDate: Date;
  client: string;
}

class SaleContoller {
  async findAll(req: Request, res: Response) {
    try {
      const service = SaleService;

      const sales = await service.findAll();

      return res.status(200).json(sales);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const service = SaleService;

      const sale = await service.findById(req.params.id);

      return res.status(200).json(sale);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { code, value, saleDate, client }: Isale = req.body;

      const service = SaleService;

      const sale = await service.create(code, value, saleDate, client);

      return res.status(201).json(sale);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { code, value, saleDate, client }: Isale = req.body;
      const id = req.params.id;

      const service = SaleService;

      const sale = await service.update(id, code, value, saleDate, client);

      return res.status(200).json(sale);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new SaleContoller();
