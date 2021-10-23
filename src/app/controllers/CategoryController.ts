import CategoryService from '@services/CategoryService';
import { Request, Response } from 'express';

interface ICategory {
  code?: number;
  name?: string;
}

class CategoryContoller {
  async create(req: Request, res: Response) {
    try {
      const { code, name }: ICategory = req.body;

      const service = CategoryService;

      const category = await service.create(code, name);

      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { code, name }: ICategory = req.body;
      const id = req.params.id;

      const service = CategoryService;

      const category = await service.update(id, code, name);

      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new CategoryContoller();
