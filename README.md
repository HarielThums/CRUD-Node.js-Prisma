# CRUD-Node.js-Prisma

## Ajudas e informações do projeto;

- **Requisitos:**
  - Docker/docker-compose;
  - Node.js


- **Comandos para iniciar o projeto:**

  - Primeiro: `docker-compose up -d`
  - Segundo: `yarn`
  - Terceiro Altere o nome do arquivo `.env.example`, para `.env`
  - Quarto: `yarn prisma migrate dev`
  - Quinto: `yarn dev`

- **Collections:**
  - Export das collections está na pasta `./insomnia-colletions`

- **Dump Database:**
  - Dump do database está na pasta `./src/database/dump/`
  - Dump command: `docker exec mysql sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > ./src/database/dump/`
