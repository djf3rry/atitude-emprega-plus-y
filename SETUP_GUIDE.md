# Guia de Configuração - Programa Atitude Emprega+

## Visão Geral

Este é um site estático de cadastro para o Programa Atitude Emprega+, uma plataforma de empregabilidade e desenvolvimento profissional para a população LGBT+. O site foi desenvolvido com React, Tailwind CSS e integração com Google Planilhas.

## Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Cores do Arco-Íris**: Layout com gradientes das cores do arco-íris
- **Formulário de Cadastro**: Coleta dados de profissionais interessados
- **Integração Google Planilhas**: Dados enviados automaticamente para uma planilha
- **SEO Otimizado**: Meta tags, schema.org, sitemap e robots.txt
- **Tipografia Premium**: Poppins (títulos) + Inter (corpo)

## Campos do Formulário

O formulário coleta as seguintes informações:

1. **Nome Completo** (obrigatório)
2. **Email** (obrigatório)
3. **WhatsApp** (obrigatório)
4. **Instagram** (opcional)
5. **Cidade** (opcional)
6. **Bairro** (opcional)
7. **Escolaridade** (opcional)
   - Ensino Fundamental
   - Ensino Médio
   - Ensino Técnico
   - Ensino Superior
   - Pós-Graduação
8. **Área de Interesse** (opcional)
9. **Currículo** (opcional)
   - Upload de arquivo (PDF, DOC ou DOCX)
   - Máximo 5MB
   - Checkbox para indicar que não possui currículo

## Configuração do Google Planilhas

### Passo 1: Criar a Planilha

1. Acesse [Google Sheets](https://sheets.google.com)
2. Clique em "Novo" e crie uma planilha em branco
3. Nomeie a planilha como "Atitude Emprega+ - Cadastros"
4. Crie uma aba chamada "Cadastros"

### Passo 2: Configurar o Google Apps Script

1. Acesse [Google Apps Script](https://script.google.com)
2. Clique em "Novo projeto"
3. Copie o código do arquivo `GOOGLE_APPS_SCRIPT.js` (incluído neste repositório)
4. Cole o código no editor do Apps Script
5. Substitua `"SEU_SPREADSHEET_ID"` pelo ID real da sua planilha

#### Como encontrar o ID da Planilha:

- Abra a planilha no Google Sheets
- A URL será: `https://docs.google.com/spreadsheets/d/AQUI_ESTA_O_ID/edit`
- Copie a parte entre `/d/` e `/edit`

### Passo 3: Publicar o Apps Script

1. No editor do Apps Script, clique em "Deploy" (canto superior direito)
2. Selecione "New deployment"
3. Escolha "Type" > "Web app"
4. Configure:
   - **Execute as**: Seu email do Google
   - **Who has access**: "Anyone"
5. Clique em "Deploy"
6. Copie a URL do Web App fornecida

### Passo 4: Configurar Pasta do Google Drive (Opcional)

Se desejar armazenar os currículos automaticamente:

1. Crie uma pasta no Google Drive para armazenar os currículos
2. Copie o ID da pasta (da URL: `https://drive.google.com/drive/folders/AQUI_ESTA_O_ID`)
3. No Google Apps Script, substitua `"SEU_FOLDER_ID"` pelo ID real
4. Certifique-se de que a pasta tem permissão de escrita para o Apps Script

### Passo 5: Atualizar o Site

1. Abra o arquivo `client/src/pages/Home.tsx`
2. Procure pela linha com `const scriptURL = "https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercopy";`
3. Substitua `YOUR_SCRIPT_ID` pela URL do Web App que você copiou no passo anterior
4. Salve o arquivo

## Hospedagem no GitHub Pages

### Passo 1: Criar Repositório (Atualizado)

1. Acesse [GitHub](https://github.com)
2. Crie um novo repositório chamado `atitude-emprega-plus`
3. Clone o repositório para sua máquina

### Passo 2: Preparar o Projeto

```bash
# Instale as dependências
npm install

# Ou com pnpm
pnpm install
```

### Passo 3: Build do Projeto

```bash
# Crie a versão de produção
npm run build

# Ou com pnpm
pnpm build
```

### Passo 4: Configurar GitHub Pages

1. Vá para as configurações do repositório
2. Navegue até "Pages"
3. Em "Source", selecione "Deploy from a branch"
4. Escolha a branch `main` e a pasta `dist`
5. Clique em "Save"

### Passo 5: Fazer Deploy

```bash
# Adicione todos os arquivos
git add .

# Faça commit
git commit -m "Initial commit - Atitude Emprega+ website"

# Faça push
git push origin main
```

O site estará disponível em: `https://seu-usuario.github.io/atitude-emprega-plus`

## SEO Otimização

O site inclui as seguintes otimizações de SEO:

### Meta Tags

- **Title**: "Programa Atitude Emprega+ | Empregabilidade LGBT+"
- **Description**: Descrição clara da plataforma
- **Keywords**: LGBT+, emprego, empregabilidade, inclusão, diversidade, etc.
- **Open Graph**: Para compartilhamento em redes sociais
- **Twitter Card**: Para visualização em Twitter

### Estruturados

- **Schema.org**: Dados estruturados da organização
- **Sitemap**: `sitemap.xml` para indexação
- **Robots.txt**: Instruções para mecanismos de busca

### Boas Práticas

- URLs amigáveis
- Tipografia clara e legível
- Imagens otimizadas
- Responsividade mobile-first
- Carregamento rápido

## Personalização

### Cores

As cores do arco-íris podem ser personalizadas no arquivo `client/src/index.css`:

```css
--rainbow-red: #FF4757;
--rainbow-orange: #FFA502;
--rainbow-yellow: #FFD93D;
--rainbow-green: #6BCB77;
--rainbow-blue: #4D96FF;
--rainbow-indigo: #6C5CE7;
--rainbow-violet: #A55EEA;
```

### Tipografia

As fontes estão definidas em `client/index.html`:

- **Poppins**: Para títulos (h1, h2, h3, etc.)
- **Inter**: Para corpo de texto

### Conteúdo

Para personalizar o conteúdo, edite o arquivo `client/src/pages/Home.tsx`:

- Textos das seções
- Descrições dos pilares
- Informações de contato
- Links de redes sociais

## Troubleshooting

### O formulário não está enviando dados

1. Verifique se o URL do Google Apps Script está correto em `Home.tsx`
2. Certifique-se de que o Apps Script foi publicado como "Web app"
3. Verifique se o ID da planilha está correto no Apps Script

### O site não está aparecendo no Google

1. Verifique se o `robots.txt` está permitindo indexação
2. Envie o sitemap ao Google Search Console
3. Aguarde alguns dias para indexação

### Problemas com CORS

O formulário usa `mode: "no-cors"` para evitar problemas de CORS. Se houver problemas, considere usar um serviço de proxy ou backend.

## Suporte

Para mais informações sobre o Programa Atitude Emprega+, visite:

- **Email**: contato@atitudeemprega.com
- **WhatsApp**: (11) 99999-9999
- **Instagram**: @atitudeemprega
- **Facebook**: Atitude Emprega+

## Licença

Este projeto é fornecido como está para uso do Programa Atitude Emprega+.

---

**Desenvolvido com ❤️ para inclusão e diversidade**
