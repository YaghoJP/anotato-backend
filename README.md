# 🔙 Task Manager - Backend

Este projeto é uma **API REST para gerenciamento de tarefas**, desenvolvida com **Node.js e Express**, utilizando **PostgreSQL** como banco de dados e **JWT** para autenticação.

---

## 🚀 Sobre o projeto

Este backend foi criado para dar suporte ao frontend de um sistema de tarefas (To-Do List), permitindo o gerenciamento completo de tarefas de forma segura.

O projeto foi desenvolvido para **uso pessoal e aprendizado**, com foco em práticas modernas de desenvolvimento backend e arquitetura de APIs.

---

## 🧱 Tecnologias utilizadas

* Node.js
* Express
* PostgreSQL
* JSON Web Token (JWT)
* CORS
* Docker

---

## 🧠 Funcionalidades

* ✅ Criar tarefas
* ✅ Listar tarefas
* ✅ Marcar tarefas como concluídas
* ✅ Autenticação de usuários com JWT
* ✅ Rotas protegidas com middleware
* ✅ Integração com banco de dados PostgreSQL

---

## 🔐 Autenticação

A API utiliza autenticação baseada em **JWT (JSON Web Token)**.

Após o login, o usuário recebe um token que deve ser enviado nas requisições protegidas:

```http id="f4s9k1"
Authorization: Bearer SEU_TOKEN
```

---

## 🔗 Endpoints da API

### 📌 Listar tarefas

```http id="p8k3n2"
GET /tasks
```

---

### 📌 Criar tarefa

```http id="k2m9d1"
POST /tasks
```

Body:

```json id="t7c4r8"
{
  "title": "Nova tarefa"
}
```

---

### 📌 Finalizar tarefa

```http id="z1x8v6"
PUT /tasks/finish/:id
```

---

### 📌 Login

```http id="n5w2q7"
POST /auth/login
```

---

## 🧩 Estrutura do projetovite build

```id="u3k9z1"
src/
  controllers/
    taskController.js
    authController.js

  routes/
    taskRoutes.js
    authRoutes.js

  middlewares/
    authMiddleware.js

  database/
    connection.js

  app.js / server.js
```

---

## 🐳 Como rodar o projeto (Docker)

O projeto está totalmente containerizado.
👉 Basta subir o Docker para rodar toda a aplicação.

### 1. Clonar repositório

```bash id="m4c2n7"
git clone https://github.com/seu-usuario/seu-repo-backend.git
```

---

### 2. Subir os containers

```bash id="m9x4q2"
docker-compose up --build
```

---

### 3. Pronto 🚀

A API estará disponível em:

```text id="v7n2k1"
http://localhost:3000
```

---

## ⚙️ Variáveis de ambiente

Caso necessário, configure um arquivo `.env`:

```env id="q7v2b9"
PORT=3000
DATABASE_URL=postgres://user:password@db:5432/seu_banco
JWT_SECRET=seu_segredo_super_seguro
```

---

## 🌐 Banco de dados

O projeto utiliza **PostgreSQL**, rodando via Docker.

---

## 🔐 CORS

O projeto utiliza CORS para permitir requisições do frontend:

```js id="w2e9h6"
app.use(cors());
```

---

## 📌 Melhorias futuras

* [ ] Validação de dados (Zod / Joi)
* [ ] Paginação de tarefas
* [ ] Testes automatizados
* [ ] Logs estruturados

---

## 📚 Aprendizados

Durante o desenvolvimento deste backend, foram trabalhados:

* Construção de APIs REST com Express
* Integração com PostgreSQL
* Autenticação com JWT
* Containerização com Docker
* Separação de responsabilidades (controllers, routes, middlewares)

---

## 👨‍💻 Autor

[Yaghojp](https://github.com/YaghoJP)

---
