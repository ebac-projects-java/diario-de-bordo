# Diário de Bordo

Aplicação desenvolvida como atividade prática da EBAC utilizando **Next.js 16** e os conceitos de **Progressive Web App (PWA)**.

## 🔗 Links

- **Repositório:** https://github.com/ebac-projects-java/diario-de-bordo

## 📋 Descrição

O Diário de Bordo é uma aplicação web que permite registrar atividades diárias por meio de título, descrição e data. Os registros são armazenados localmente utilizando **localStorage**, garantindo persistência dos dados mesmo após atualizar a página.

Além disso, o projeto foi configurado como um **Progressive Web App (PWA)**, permitindo instalação no dispositivo, funcionamento offline e uma experiência semelhante à de um aplicativo nativo.

## 🚀 Funcionalidades

- Criar novas entradas do diário
- Listar todas as entradas cadastradas
- Remover entradas
- Persistência de dados utilizando `localStorage`
- Funcionamento offline
- Instalação como aplicativo (PWA)
- Interface responsiva para dispositivos móveis e desktops

## 🛠️ Tecnologias utilizadas

- Next.js 16
- React 19
- TypeScript
- Progressive Web App (PWA)
- Service Worker
- Local Storage
- CSS

## 📱 Recursos PWA

- Manifest configurado
- Ícones 192x192 e 512x512
- Service Worker registrado
- Instalação da aplicação pelo navegador
- Funcionamento offline
- Persistência dos dados mesmo sem conexão com a internet

## 📂 Estrutura do projeto

```text
app/
├── globals.css
├── layout.tsx
├── manifest.ts
└── page.tsx

components/
├── FormularioEntrada.tsx
├── InstalarPWA.tsx
└── ListaEntradas.tsx

hooks/
└── useLocalStorage.ts

types/
└── Entrada.ts

public/
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── service-worker.js
```

## ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/ebac-projects-java/diario-de-bordo.git
```

Entre na pasta do projeto:

```bash
cd diario-de-bordo
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:3000
```

## 📖 Objetivo da atividade

Aplicar os conceitos de Progressive Web Apps (PWA) utilizando Next.js, implementando:

- Registro de atividades diárias;
- Persistência de dados com Local Storage;
- Funcionamento offline;
- Manifest da aplicação;
- Service Worker;
- Instalação como aplicativo;
- Interface responsiva.

## 👨‍💻 Autor

Desenvolvido por **Gustavo Lima**.