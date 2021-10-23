import prisma from '@database/prisma';

class CategoryService {
  async create(code: number, name: string) {
    try {
      const category = await prisma.categoria.create({ data: { name, code } });

      return category;
    } catch (error) {
      throw new Error('error on CategoryService: ' + error.message);
    }
  }

  async update(id: string, code?: number, name?: string) {
    try {
      const category = await prisma.categoria.update({ where: { id }, data: { name, code } });

      return category;
    } catch (error) {
      throw new Error('error on CategoryService: ' + error.message);
    }
  }
}

export default new CategoryService();
