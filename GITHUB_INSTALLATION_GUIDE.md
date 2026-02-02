# Guia Completo: Instalação do Programa Atitude Emprega+ no GitHub

## 📋 Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Passo 1: Preparar o GitHub](#passo-1-preparar-o-github)
3. [Passo 2: Configurar Google Planilhas](#passo-2-configurar-google-planilhas)
4. [Passo 3: Clonar e Preparar o Projeto](#passo-3-clonar-e-preparar-o-projeto)
5. [Passo 4: Fazer Deploy](#passo-4-fazer-deploy)
6. [Passo 5: Ativar GitHub Pages](#passo-5-ativar-github-pages)
7. [Troubleshooting](#troubleshooting)

---

## Pré-requisitos

Antes de começar, você precisa ter:

- **Conta no GitHub** (crie em https://github.com se não tiver)
- **Git instalado** no seu computador (https://git-scm.com/download)
- **Node.js** instalado (https://nodejs.org - versão 18+)
- **Conta no Google** para configurar Google Planilhas

### Verificar se Git e Node estão instalados:

```bash
git --version
node --version
npm --version
```

Se não aparecer versão, instale os programas nos links acima.

---

## Passo 1: Preparar o GitHub

### 1.1 Criar um novo repositório

1. Acesse https://github.com/new
2. Preencha os dados:
   - **Repository name**: `atitude-emprega-plus`
   - **Description**: "Plataforma de empregabilidade para população LGBT+"
   - **Visibility**: Public (para que fique acessível)
   - **Initialize this repository with**: Deixe em branco
3. Clique em "Create repository"

### 1.2 Copiar a URL do repositório

Após criar, você verá uma página com a URL. Copie a URL HTTPS (deve ser algo como):
```
https://github.com/seu-usuario/atitude-emprega-plus.git
```

---

## Passo 2: Configurar Google Planilhas

### 2.1 Criar a Planilha

1. Acesse https://sheets.google.com
2. Clique em "Novo" (ícone + no canto esquerdo)
3. Selecione "Planilha em branco"
4. Nomeie como: "Atitude Emprega+ - Cadastros"
5. Crie uma aba chamada "Cadastros"

### 2.2 Adicionar Cabeçalhos

Na aba "Cadastros", adicione os seguintes cabeçalhos na primeira linha:

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| Data/Hora | Nome | Email | WhatsApp | Cidade | Bairro | Escolaridade | Instagram | Área de Interesse | Possui Currículo | Link do Currículo |

### 2.3 Obter o ID da Planilha

1. Abra a planilha
2. Copie o ID da URL: `https://docs.google.com/spreadsheets/d/AQUI_ESTA_O_ID/edit`
3. Guarde este ID (você precisará depois)

### 2.4 Criar Pasta para Currículos (Opcional)

Se deseja armazenar currículos:

1. Acesse https://drive.google.com
2. Crie uma nova pasta chamada "Atitude Emprega+ - Currículos"
3. Copie o ID da pasta da URL: `https://drive.google.com/drive/folders/AQUI_ESTA_O_ID`
4. Guarde este ID também

### 2.5 Criar o Google Apps Script

1. Acesse https://script.google.com
2. Clique em "Novo projeto"
3. Cole o código abaixo:

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

4. **Importante**: Substitua:
   - `"SEU_SPREADSHEET_ID"` pelo ID da sua planilha
   - `"SEU_FOLDER_ID"` pelo ID da pasta de currículos (ou remova esta linha se não usar)

5. Clique em "Salvar" (Ctrl+S)

### 2.6 Publicar o Apps Script como Web App

1. Clique em "Deploy" (canto superior direito)
2. Selecione "New deployment"
3. Escolha o ícone de engrenagem e selecione "Web app"
4. Configure:
   - **Execute as**: Seu email do Google
   - **Who has access**: "Anyone"
5. Clique em "Deploy"
6. Você verá um link como: `https://script.google.com/macros/s/AQUI_ESTA_O_ID/usercopy`
7. **Copie este link** - você precisará dele no próximo passo

---

## Passo 3: Clonar e Preparar o Projeto

### 3.1 Abrir o Terminal/Prompt de Comando

- **Windows**: Pressione `Win + R`, digite `cmd` e pressione Enter
- **Mac**: Abra "Terminal" (Cmd + Space, digite "Terminal")
- **Linux**: Abra o Terminal

### 3.2 Navegar para uma pasta

```bash
# Criar uma pasta para o projeto
mkdir projetos
cd projetos
```

### 3.3 Clonar o repositório

```bash
git clone https://github.com/seu-usuario/atitude-emprega-plus.git
cd atitude-emprega-plus
```

### 3.4 Instalar dependências

```bash
npm install
```

Isso pode levar alguns minutos. Aguarde até aparecer "added X packages".

### 3.5 Atualizar o arquivo Home.tsx com o URL do Apps Script

1. Abra o arquivo `client/src/pages/Home.tsx` em um editor de texto
2. Procure pela linha:
   ```javascript
   const scriptURL = "https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercopy";
   ```
3. Substitua `YOUR_SCRIPT_ID` pelo URL completo que você copiou no Passo 2.6
4. Salve o arquivo

---

## Passo 4: Fazer Deploy

### 4.1 Build do Projeto

```bash
npm run build
```

Isso criará uma pasta chamada `dist` com os arquivos prontos para produção.

### 4.2 Adicionar os arquivos ao Git

```bash
git add .
```

### 4.3 Fazer Commit

```bash
git commit -m "Initial commit - Atitude Emprega+ website"
```

### 4.4 Fazer Push para o GitHub

```bash
git push origin main
```

Se receber um erro sobre "main" não existir, use:
```bash
git push origin master
```

---

## Passo 5: Ativar GitHub Pages

### 5.1 Acessar as Configurações do Repositório

1. Vá para https://github.com/seu-usuario/atitude-emprega-plus
2. Clique em "Settings" (ícone de engrenagem)
3. No menu esquerdo, clique em "Pages"

### 5.2 Configurar GitHub Pages

1. Em "Source", selecione "Deploy from a branch"
2. Em "Branch", selecione "main" (ou "master")
3. Em "Folder", selecione "/ (root)"
4. Clique em "Save"

### 5.3 Aguardar Deploy

1. Volte para a aba "Code"
2. Você verá um ícone de engrenagem com "Deployments" no lado direito
3. Clique em "Deployments"
4. Aguarde até aparecer "Active" (pode levar 2-5 minutos)

### 5.4 Acessar o Site

Seu site estará disponível em:
```
https://seu-usuario.github.io/atitude-emprega-plus
```

Substitua `seu-usuario` pelo seu nome de usuário do GitHub.

---

## Troubleshooting

### Erro: "fatal: not a git repository"

**Solução**: Certifique-se de que está na pasta correta:
```bash
cd atitude-emprega-plus
```

### Erro: "npm: command not found"

**Solução**: Node.js não está instalado. Baixe em https://nodejs.org

### O site não aparece após deploy

**Solução**:
1. Verifique se o branch é "main" ou "master" nas configurações do Pages
2. Aguarde 5 minutos
3. Limpe o cache do navegador (Ctrl+F5)

### O formulário não está enviando dados

**Solução**:
1. Verifique se o URL do Apps Script está correto em `Home.tsx`
2. Verifique se o Apps Script foi publicado como "Web app"
3. Verifique se o ID da planilha está correto no Apps Script

### Erro ao fazer push

**Solução**: Configure suas credenciais do Git:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

---

## Próximos Passos

Após o deploy bem-sucedido:

1. **Testar o formulário**: Preencha e envie um cadastro de teste
2. **Verificar a planilha**: Confirme que os dados aparecem no Google Sheets
3. **Compartilhar o link**: Divulgue `https://seu-usuario.github.io/atitude-emprega-plus`
4. **Adicionar domínio personalizado** (opcional): Você pode usar um domínio próprio

---

## Suporte

Se encontrar problemas:

1. Verifique este guia novamente
2. Consulte a seção Troubleshooting
3. Visite https://docs.github.com/pt para documentação do GitHub
4. Visite https://developers.google.com/apps-script para documentação do Apps Script

---

**Desenvolvido com ❤️ para inclusão e diversidade**

Última atualização: 02/02/2026
