# 🛍️ Catálogo de Produtos - Backend

API REST para sistema de catálogo de produtos construída com Node.js, Express, TypeScript e Prisma. Oferece operações CRUD completas para produtos.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Tipagem estática
- **Prisma** - ORM moderno
- **PostgreSQL** - Banco de dados
- **CORS** - Controle de acesso

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm, yarn ou pnpm
- SQLite (incluído)

## 🛠️ Instalação e Execução

### 1. Instalar dependências
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 2. Configurar banco de dados
```bash
# Gerar cliente Prisma
npx prisma generate

# Executar migrações
npx prisma migrate dev

# (Opcional) Visualizar banco de dados
npx prisma studio
```

### 3. Executar em modo de desenvolvimento
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

### 4. Servidor disponível
A API estará rodando em [http://localhost:3002](http://localhost:3002)

## 📁 Estrutura de Pastas

```
src/
├── controllers/           # Controladores da API
│   ├── productController.ts  # Controlador de produtos
│   └── listsController.ts    # Controlador de listas
├── lib/                  # Bibliotecas e configurações
│   └── prisma.ts         # Cliente Prisma
├── middlewares/          # Middlewares
│   └── errorHandler.ts   # Middleware de tratamento de erros
├── repositories/         # Camada de acesso aos dados
│   └── productRepository.ts # Repository de produtos
├── routes/               # Rotas da API
│   ├── indexRoutes.ts    # Roteador principal
│   ├── productRoutes.ts  # Rotas de produtos
│   └── listsRoutes.ts    # Rotas de listas
├── schema/               # Schemas de validação
│   └── productSchema.ts  # Schema de produtos
├── services/             # Lógica de negócio
│   └── productService.ts # Serviços de produtos
└── index.ts              # Arquivo principal do servidor

prisma/
├── schema.prisma         # Schema do banco de dados
└── migrations/           # Migrações do banco
    ├── 20250730213816_init/
    ├── 20250804011240_add_user_model/
    └── migration_lock.toml

dist/                     # Código compilado
generated/                # Arquivos gerados automaticamente
```

## 🏥 Endpoint de Saúde

### GET `/health`
Verifica se a API está funcionando
```json
{
  "status": "OK",
  "message": "API is running"
}
```

## 📦 Endpoints de Produtos

### GET `/api/products`
Listar todos os produtos
```json
[
  {
    "id": 1,
    "name": "Produto Exemplo",
    "description": "Descrição do produto",
    "price": 99.99,
    "imageUrl": "https://exemplo.com/imagem.jpg",
    "isFavorite": false,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### POST `/api/products`
Criar novo produto
```json
{
  "name": "Produto Exemplo",
  "description": "Descrição do produto",
  "price": 99.99,
  "imageUrl": "https://exemplo.com/imagem.jpg"
}
```

### GET `/api/products/:id`
Buscar produto por ID

### PUT `/api/products/:id`
Atualizar produto
```json
{
  "name": "Produto Atualizado",
  "description": "Nova descrição",
  "price": 149.99,
  "imageUrl": "https://exemplo.com/nova-imagem.jpg"
}
```

### DELETE `/api/products/:id`
Deletar produto

### PUT `/api/products/:id/favorite`
Marcar/desmarcar produto como favorito

## 🗄️ Modelo de Dados

### Product
```prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  price       Float
  imageUrl    String?
  isFavorite  Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 🔒 Segurança

- **CORS**: Configurado para frontend (localhost:3000)
- **Validação**: Middleware de tratamento de erros global


## 📱 Scripts Disponíveis

```bash
npm run dev          # Executa em modo desenvolvimento
npm run build        # Compila TypeScript
npm run start        # Executa versão compilada
```

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:
```env
DATABASE_URL="postgresql://usuario:senha@host:porta/database"
PORT=3002
```

## 🔗 Integração com Frontend

Este backend foi projetado para funcionar com o frontend Next.js na porta 3000. Certifique-se de que ambos estejam rodando para funcionalidade completa.