## 📦 Tech Stack

- Express
- TypeScript
- dotenv
- ESLint
- Prettier

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

git clone https://github.com/Ade-nahuelpan/notifyer-backend.git
cd notifyer-backend

### 2. Install dependencies

npm install

### 3. Create environment file

Create a `.env` file in the root directory:

PORT=3000

(Use `.env.example` as a reference)

### 4. Run the development server

npm run dev

This will start the Express server on: http://localhost:3000

---

## 🔧 Scripts

| Script          | Purpose                                    |
|-----------------|--------------------------------------------|
| npm run dev     | Start development server with hot reload   |
| npm run build   | Compile TypeScript to JavaScript           |
| npm start       | Run compiled app from dist/                |
| npm run lint    | Check code style with ESLint               |
| npm run format  | Auto-format code with Prettier             |

---

## ✅ Code Quality Tools

### ESLint

Runs static code analysis to catch bugs and enforce best practices.

npm run lint

### Prettier

Formats your code to keep it clean and consistent.

npm run format

You can also enable "format on save" in VS Code:

.vscode/settings.json:
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}

---

## 🛡️ .gitignore and .env

Make sure your `.env` and other sensitive files are ignored:

node_modules/
dist/
.env

---

## 📤 Deployment

For production:

npm run build
npm start

Use with any Node.js host (e.g. Render, Railway, Vercel, Heroku).


