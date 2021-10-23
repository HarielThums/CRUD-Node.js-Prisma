import prisma from '@database/prisma';

class StockService {
  async update(id: string, produtoId?: string, price?: number, quantity?: number) {
    try {
      const stock = await prisma.estoque.update({ where: { id }, data: { price, produtoId, quantity } });

      return stock;
    } catch (error) {
      throw new Error('error on StockService: ' + error.message);
    }
  }

  async create(produtoId: string, price: number, quantity: number) {
    try {
      const stock = await prisma.estoque.create({ data: { price, produtoId, quantity } });

      return stock;
    } catch (error) {
      throw new Error('error on StockService: ' + error.message);
    }
  }

  async findById(id: string) {
    try {
      const stock = await prisma.estoque.findFirst({ where: { id } });

      return stock;
    } catch (error) {
      throw new Error('error on StockService: ' + error.message);
    }
  }

  async findAll() {
    try {
      const stocks = await prisma.estoque.findMany();

      return stocks;
    } catch (error) {
      throw new Error('error on StockService: ' + error.message);
    }
  }
}

export default new StockService();
