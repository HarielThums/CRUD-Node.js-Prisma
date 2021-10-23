import prisma from '@database/prisma';

class SaleService {
  async update(id: string, code?: number, value?: string, saleDate?: Date, clienteId?: string) {
    try {
      const stock = await prisma.venda.update({ where: { id }, data: { code, value, clienteId, saleDate: new Date(saleDate) } });

      return stock;
    } catch (error) {
      throw new Error('error on SaleService: ' + error.message);
    }
  }

  async create(code: number, value: string, saleDate: Date, clienteId: string) {
    try {
      const stock = await prisma.venda.create({ data: { code, value, clienteId, saleDate: new Date(saleDate) } });

      return stock;
    } catch (error) {
      throw new Error('error on SaleService: ' + error.message);
    }
  }

  async findById(id: string) {
    try {
      const stock = await prisma.venda.findFirst({ where: { id } });

      return stock;
    } catch (error) {
      throw new Error('error on SaleService: ' + error.message);
    }
  }

  async findAll() {
    try {
      const stocks = await prisma.venda.findMany();

      return stocks;
    } catch (error) {
      throw new Error('error on SaleService: ' + error.message);
    }
  }
}

export default new SaleService();
