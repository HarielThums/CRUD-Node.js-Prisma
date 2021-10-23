import prisma from '@database/prisma';

class ClientService {
  async update(id: string, code?: number, name?: string, email?: string, birthDate?: Date) {
    try {
      if (birthDate) this.validateBirthday(new Date(birthDate));

      const cliente = await prisma.cliente.update({ where: { id }, data: { code, name, email, birthDate } });

      return cliente;
    } catch (error) {
      throw new Error('error on ClientService: ' + error.message);
    }
  }

  async create(code: number, name: string, email: string, birthDate: Date) {
    try {
      this.validateBirthday(new Date(birthDate));

      const cliente = await prisma.cliente.create({ data: { code, name, email, birthDate } });

      return cliente;
    } catch (error) {
      throw new Error('error on ClientService: ' + error.message);
    }
  }

  async findById(id: string) {
    try {
      const client = await prisma.cliente.findFirst({ where: { id } });

      return client;
    } catch (error) {
      throw new Error('error on ClientService: ' + error.message);
    }
  }

  async findAll() {
    try {
      const clients = await prisma.cliente.findMany();

      return clients;
    } catch (error) {
      throw new Error('error on ClientService: ' + error.message);
    }
  }

  private validateBirthday(birthday: Date) {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);

    if (
      date.getFullYear() < birthday.getFullYear() ||
      (date.getFullYear() === birthday.getFullYear() && date.getMonth() < birthday.getMonth()) ||
      (date.getFullYear() === birthday.getFullYear() && date.getMonth() === birthday.getMonth() && date.getDate() < birthday.getDate())
    ) {
      throw new Error('The client must be of legal age (+18)');
    }
  }
}

export default new ClientService();
