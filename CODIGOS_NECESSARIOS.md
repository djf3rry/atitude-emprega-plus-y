# 📝 Todos os Códigos Necessários

Este arquivo contém todos os códigos que você precisa copiar e colar durante a instalação.

---

## 1️⃣ Google Apps Script

**Onde usar**: Google Apps Script (https://script.google.com)

```javascript
// Google Apps Script para integração com Google Planilhas
const SPREADSHEET_ID = "SEU_SPREADSHEET_ID";
const SHEET_NAME = "Cadastros";
const FOLDER_ID = "SEU_FOLDER_ID"; // ID da pasta no Google Drive para armazenar currículos

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    
    // Obter dados do formulário
    const data = e.parameter;
    
    // Processar arquivo de currículo se existir
    let curriculoLink = "";
    let nomeArquivo = "";
    
    if (e.contents && e.contents.curriculo) {
      try {
        const blob = e.contents.curriculo;
        const fileName = data.nome + "_" + new Date().getTime() + "_curriculo";
        
        // Salvar arquivo no Google Drive
        const folder = DriveApp.getFolderById(FOLDER_ID);
        const file = folder.createFile(blob);
        file.setName(fileName);
        
        // Obter link do arquivo
        curriculoLink = file.getUrl();
        nomeArquivo = file.getName();
      } catch (fileError) {
        Logger.log("Erro ao salvar currículo: " + fileError);
      }
    }
    
    // Criar array com os dados na ordem correta
    const row = [
      new Date(),                    // Data/Hora
      data.nome || "",
      data.email || "",
      data.whatsapp || "",
      data.cidade || "",
      data.bairro || "",
      data.escolaridade || "",
      data.instagram || "",
      data.areaInteresse || "",
      data.semCurriculo ? "Não" : (nomeArquivo ? "Sim" : "Não"),  // Possui Currículo
      curriculoLink ? '=HYPERLINK("' + curriculoLink + '","' + nomeArquivo + '")' : "Não enviado"  // Link do Currículo
    ];
    
    // Adicionar linha à planilha
    sheet.appendRow(row);
    
    // Retornar sucesso
    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      message: "Cadastro recebido com sucesso!"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Retornar erro
    Logger.log("Erro: " + error);
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Função para criar os cabeçalhos na planilha
function createHeaders() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const headers = [
    "Data/Hora",
    "Nome",
    "Email",
    "WhatsApp",
    "Cidade",
    "Bairro",
    "Escolaridade",
    "Instagram",
    "Área de Interesse",
    "Possui Currículo",
    "Link do Currículo"
  ];
  sheet.appendRow(headers);
}
```

### ⚠️ Importante:
- Substitua `"SEU_SPREADSHEET_ID"` pelo ID real da sua planilha
- Substitua `"SEU_FOLDER_ID"` pelo ID real da pasta de currículos (ou remova se não usar)

---

## 2️⃣ Comandos do Terminal/Prompt

**Onde usar**: Terminal/Prompt de Comando do seu computador

### Criar pasta e clonar repositório:
```bash
mkdir projetos
cd projetos
git clone https://github.com/seu-usuario/atitude-emprega-plus.git
cd atitude-emprega-plus
```

### Instalar dependências:
```bash
npm install
```

### Build do projeto:
```bash
npm run build
```

### Fazer deploy no GitHub:
```bash
git add .
git commit -m "Initial commit - Atitude Emprega+ website"
git push origin main
```

Se receber erro sobre "main", use:
```bash
git push origin master
```

### Configurar credenciais do Git (se necessário):
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

---

## 3️⃣ Atualizar arquivo Home.tsx

**Onde usar**: Arquivo `client/src/pages/Home.tsx`

**O que procurar**:
```javascript
const scriptURL = "https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercopy";
```

**Substituir por** (use o URL completo do seu Apps Script):
```javascript
const scriptURL = "https://script.google.com/macros/s/AQUI_COLOQUE_O_ID_DO_SEU_APPS_SCRIPT/usercopy";
```

---

## 4️⃣ Estrutura de Pastas do Projeto

Após clonar, você terá esta estrutura:

```
atitude-emprega-plus/
├── client/
│   ├── public/
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          ← Editar aqui (passo 3)
│   │   ├── components/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── index.html
├── GITHUB_INSTALLATION_GUIDE.md
├── GOOGLE_APPS_SCRIPT.js
├── SETUP_GUIDE.md
├── CODIGOS_NECESSARIOS.md        ← Este arquivo
├── package.json
└── README.md
```

---

## 5️⃣ Checklist de Configuração

Use este checklist para acompanhar seu progresso:

- [ ] Criar conta no GitHub
- [ ] Criar repositório "atitude-emprega-plus"
- [ ] Instalar Git e Node.js
- [ ] Criar planilha no Google Sheets
- [ ] Copiar ID da planilha
- [ ] Criar pasta de currículos no Google Drive
- [ ] Copiar ID da pasta
- [ ] Criar Google Apps Script
- [ ] Colar código do Apps Script
- [ ] Substituir IDs no Apps Script
- [ ] Publicar Apps Script como Web App
- [ ] Copiar URL do Web App
- [ ] Clonar repositório localmente
- [ ] Instalar dependências (npm install)
- [ ] Editar Home.tsx com URL do Apps Script
- [ ] Build do projeto (npm run build)
- [ ] Fazer commit e push (git add . / git commit / git push)
- [ ] Ativar GitHub Pages nas configurações
- [ ] Testar o site em https://seu-usuario.github.io/atitude-emprega-plus
- [ ] Testar envio de formulário
- [ ] Verificar dados na planilha Google Sheets

---

## 6️⃣ Comandos Úteis

### Ver status do Git:
```bash
git status
```

### Ver histórico de commits:
```bash
git log
```

### Desfazer último commit (se errou):
```bash
git reset --soft HEAD~1
```

### Atualizar repositório local com mudanças remotas:
```bash
git pull origin main
```

### Criar novo branch (para testes):
```bash
git checkout -b novo-branch
```

---

## 7️⃣ Variáveis de Ambiente (Opcional)

Se quiser usar variáveis de ambiente para segurança:

**Arquivo: `.env.local`**
```
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID/usercopy
```

**Usar no código:**
```javascript
const scriptURL = import.meta.env.VITE_APPS_SCRIPT_URL;
```

---

## 📞 Precisa de Ajuda?

Se encontrar problemas:

1. **Erro de Git**: Verifique se está na pasta correta com `pwd`
2. **Erro de npm**: Reinstale Node.js
3. **Formulário não funciona**: Verifique URL do Apps Script em Home.tsx
4. **Dados não aparecem**: Verifique ID da planilha no Apps Script

---

**Desenvolvido com ❤️ para inclusão e diversidade**

Última atualização: 02/02/2026
