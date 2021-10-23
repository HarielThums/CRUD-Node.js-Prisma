import prisma from '@database/prisma';

class ProductService {
  async delete(id: string) {
    try {
      const product = await prisma.estoque.findFirst({ where: { produtoId: id }})

      if (product) throw new Error("Cannot delete product, because it exists on tbl: 'Estoque'");
  
      await prisma.produto.delete({ where: { id } });

      return;
    } catch (error) {
      throw new Error('error on ProductService: ' + error.message);
    }
  }

  async update(id: string, code?: number, name?: string, description?: string, categoriaId?: string) {
    try {
      const produto = await prisma.produto.update({ where: { id }, data: { code, name, description, categoriaId } });

      return produto;
    } catch (error) {
      throw new Error('error on ProductService: ' + error.message);
    }
  }

  async create(code: number, name: string, description: string, categoriaId: string) {
    try {
      const produto = await prisma.produto.create({ data: { code, name, description, categoriaId } });

      return produto;
    } catch (error) {
      throw new Error('error on ProductService: ' + error.message);
    }
  }

  async findById(id: string) {
    try {
      const product = await prisma.produto.findFirst({ where: { id: id } });

      return product;
    } catch (error) {
      throw new Error('error on ProductService: ' + error.message);
    }
  }

  async findAll() {
    try {
      const products = await prisma.produto.findMany();

      return products;
    } catch (error) {
      throw new Error('error on ProductService: ' + error.message);
    }
  }
}

export default new ProductService();
