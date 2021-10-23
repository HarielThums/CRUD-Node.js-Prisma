import ProductService from '@services/ProductService';
import { Request, Response } from 'express';

interface Iproduct {
  code: number;
  name: string;
  description: string;
  categoria: string;
}

class ProductContoller {
  async findAll(req: Request, res: Response) {
    try {
      const service = ProductService;

      const product = await service.findAll();

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const service = ProductService;

      const product = await service.findById(id);

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { code, name, description, categoria }: Iproduct = req.body;

      if (!code || !name || !description || !categoria) return res.status(400).json({ error: 'Invalid value for product' });

      const service = ProductService;

      const product = await service.create(code, name, description, categoria);

      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { code, name, description, categoria }: Iproduct = req.body;
      const id = req.params.id;

      const service = ProductService;

      const product = await service.update(id, code, name, description, categoria);

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  
  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const service = ProductService;

      await service.delete(id);

      return res.status(200).json();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new ProductContoller();
