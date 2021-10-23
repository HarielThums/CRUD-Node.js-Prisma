# CRUD-Node.js-Prisma

## Ajudas e informações do projeto;

- **Requisitos:**
  - Docker/docker-compose;
  - Node.js;

<br/>

- **Comandos para iniciar o projeto:**

  - Primeiro: `docker-compose up -d`
  - Segundo: `yarn`
  - Terceiro: `yarn prisma migrate dev`
  - Quarto: `yarn dev`

<br/>

- **Collections:**
  - Export das collections está na pasta `./insomnia-colletions`

<br/>

- **Dump Database:**
  - Dump do database está na pasta `./src/database/dump/`
  - Dump command: `docker exec mysql sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > ./src/database/dump/`
