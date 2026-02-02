# ⚡ Guia Rápido - Instalação em 10 Passos

Se você quer instalar rápido, siga estes 10 passos. Para detalhes, veja `GITHUB_INSTALLATION_GUIDE.md`.

---

## 📌 Passo 1: Preparar GitHub

1. Vá para https://github.com/new
2. Nome: `atitude-emprega-plus`
3. Visibility: Public
4. Clique em "Create repository"
5. Copie a URL HTTPS (algo como `https://github.com/seu-usuario/atitude-emprega-plus.git`)

---

## 📌 Passo 2: Preparar Google Planilhas

1. Vá para https://sheets.google.com
2. Crie uma nova planilha: "Atitude Emprega+ - Cadastros"
3. Crie uma aba chamada "Cadastros"
4. Copie o ID da URL: `https://docs.google.com/spreadsheets/d/AQUI_ESTA_O_ID/edit`

---

## 📌 Passo 3: Criar Google Apps Script

1. Vá para https://script.google.com
2. Clique em "Novo projeto"
3. Copie o código de `CODIGOS_NECESSARIOS.md` (seção 1)
4. Cole no editor
5. Substitua `SEU_SPREADSHEET_ID` pelo ID da planilha
6. Clique em "Salvar"

---

## 📌 Passo 4: Publicar Apps Script

1. Clique em "Deploy" (canto superior direito)
2. "New deployment"
3. Ícone de engrenagem → "Web app"
4. Execute as: Seu email
5. Who has access: "Anyone"
6. Clique em "Deploy"
7. Copie o URL que aparece (algo como `https://script.google.com/macros/s/AQUI_ESTA_O_ID/usercopy`)

---

## 📌 Passo 5: Abrir Terminal/Prompt

- **Windows**: Win + R → `cmd` → Enter
- **Mac**: Cmd + Space → "Terminal" → Enter
- **Linux**: Abra o Terminal

---

## 📌 Passo 6: Clonar o Repositório

```bash
mkdir projetos
cd projetos
git clone https://github.com/seu-usuario/atitude-emprega-plus.git
cd atitude-emprega-plus
npm install
```

---

## 📌 Passo 7: Editar Home.tsx

1. Abra `client/src/pages/Home.tsx` em um editor de texto
2. Procure: `const scriptURL = "https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercopy";`
3. Substitua `YOUR_SCRIPT_ID` pelo URL completo do Apps Script (do Passo 4)
4. Salve

---

## 📌 Passo 8: Build e Deploy

```bash
npm run build
git add .
git commit -m "Initial commit - Atitude Emprega+ website"
git push origin main
```

Se receber erro sobre "main", use `git push origin master`

---

## 📌 Passo 9: Ativar GitHub Pages

1. Vá para https://github.com/seu-usuario/atitude-emprega-plus
2. Clique em "Settings"
3. No menu esquerdo: "Pages"
4. Source: "Deploy from a branch"
5. Branch: "main" (ou "master")
6. Folder: "/ (root)"
7. Clique em "Save"

---

## 📌 Passo 10: Acessar o Site

Seu site estará em:
```
https://seu-usuario.github.io/atitude-emprega-plus
```

Substitua `seu-usuario` pelo seu nome de usuário do GitHub.

---

## ✅ Pronto!

Seu site está no ar! Teste:

1. Acesse o link acima
2. Preencha o formulário
3. Clique em "Enviar Cadastro"
4. Verifique se os dados aparecem na planilha Google Sheets

---

## 🆘 Problemas?

| Problema | Solução |
|----------|---------|
| npm: command not found | Instale Node.js em https://nodejs.org |
| git: command not found | Instale Git em https://git-scm.com |
| Formulário não funciona | Verifique URL do Apps Script em Home.tsx |
| Site não aparece | Aguarde 5 minutos e limpe cache (Ctrl+F5) |
| Erro ao fazer push | Configure: `git config --global user.name "Seu Nome"` |

---

## 📚 Documentação Completa

Para mais detalhes, veja:
- `GITHUB_INSTALLATION_GUIDE.md` - Guia completo passo a passo
- `CODIGOS_NECESSARIOS.md` - Todos os códigos em um só lugar
- `SETUP_GUIDE.md` - Configuração detalhada

---

**Desenvolvido com ❤️ para inclusão e diversidade**
