import ClientService from '@services/ClientService';
import { Request, Response } from 'express';

interface Iclient {
  code: number;
  name: string;
  email: string;
  birthDate: Date;
}

class ClientContoller {
  async findAll(req: Request, res: Response) {
    try {
      const service = ClientService;

      const clients = await service.findAll();

      return res.status(200).json(clients);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const service = ClientService;

      const client = await service.findById(id);

      return res.status(200).json(client);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { code, name, email, birthDate }: Iclient = req.body;

      const service = ClientService;

      const client = await service.create(code, name, email, birthDate);

      return res.status(201).json(client);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { code, name, email, birthDate }: Iclient = req.body;
      const id = req.params.id;

      const service = ClientService;

      const client = await service.update(id, code, name, email, birthDate);  

      return res.status(200).json(client);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new ClientContoller();
