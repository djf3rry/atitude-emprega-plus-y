# 🌈 Programa Atitude Emprega+

Plataforma de empregabilidade e desenvolvimento profissional para a população LGBT+.

[![GitHub Pages](https://img.shields.io/badge/Hospedado%20em-GitHub%20Pages-blue)](https://github.com/pages)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-blue)](https://tailwindcss.com)
[![Google Sheets](https://img.shields.io/badge/Google-Sheets-green)](https://sheets.google.com)

---

## 🎯 Sobre o Projeto

O Programa Atitude Emprega+ é uma iniciativa do Grupo Gay Atitude dedicada a conectar profissionais qualificados da comunidade LGBT+ a empresas verdadeiramente comprometidas com a diversidade, equidade e inclusão.

### Pilares do Programa

- **💼 Emprego**: Intermediação de vagas de emprego e estágio
- **📚 Capacitação**: Cursos profissionalizantes e workshops
- **🎓 Educação**: Bolsas e descontos em cursos técnicos e superiores
- **❤️ Acolhimento**: Suporte psicossocial e mentoria especializada

---

## ✨ Características

- 🌈 **Design com Cores do Arco-Íris**: Layout moderno e inclusivo
- 📱 **Responsivo**: Funciona em desktop, tablet e mobile
- 📝 **Formulário Completo**: Coleta dados de profissionais interessados
- 📊 **Integração Google Sheets**: Dados enviados automaticamente para planilha
- 📤 **Upload de Currículo**: Suporte para PDF, DOC e DOCX
- 🔍 **SEO Otimizado**: Meta tags, schema.org, sitemap e robots.txt
- ⚡ **Performance**: Site estático para carregamento rápido
- 🎨 **Tipografia Premium**: Poppins + Inter

---

## 🚀 Início Rápido

### Pré-requisitos

- Git (https://git-scm.com)
- Node.js 18+ (https://nodejs.org)
- Conta no GitHub (https://github.com)
- Conta no Google (para Google Sheets)

### Instalação

1. **Clone o repositório**:
```bash
git clone https://github.com/seu-usuario/atitude-emprega-plus.git
cd atitude-emprega-plus
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Configure Google Sheets**:
   - Veja `GITHUB_INSTALLATION_GUIDE.md` para instruções detalhadas

4. **Build do projeto**:
```bash
npm run build
```

5. **Deploy no GitHub Pages**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Documentação

- 📖 **[GUIA_RAPIDO.md](./GUIA_RAPIDO.md)** - Instalação em 10 passos
- 📖 **[GITHUB_INSTALLATION_GUIDE.md](./GITHUB_INSTALLATION_GUIDE.md)** - Guia completo passo a passo
- 📖 **[CODIGOS_NECESSARIOS.md](./CODIGOS_NECESSARIOS.md)** - Todos os códigos em um só lugar
- 📖 **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Configuração detalhada

---

## 📋 Campos do Formulário

O formulário coleta as seguintes informações:

| Campo | Obrigatório | Tipo |
|-------|-------------|------|
| Nome Completo | ✅ | Texto |
| Email | ✅ | Email |
| WhatsApp | ✅ | Telefone |
| Cidade | ❌ | Texto |
| Bairro | ❌ | Texto |
| Escolaridade | ❌ | Seleção |
| Instagram | ❌ | Texto |
| Área de Interesse | ❌ | Texto longo |
| Currículo | ❌ | Arquivo (PDF/DOC/DOCX) |

---

## 🛠️ Tecnologias

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Backend**: Google Apps Script
- **Banco de Dados**: Google Sheets
- **Hospedagem**: GitHub Pages
- **Build**: Vite

---

## 📁 Estrutura do Projeto

```
atitude-emprega-plus/
├── client/
│   ├── public/
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── components/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── index.html
├── GUIA_RAPIDO.md
├── GITHUB_INSTALLATION_GUIDE.md
├── CODIGOS_NECESSARIOS.md
├── SETUP_GUIDE.md
├── GOOGLE_APPS_SCRIPT.js
├── package.json
└── README.md
```

---

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Verificar tipos TypeScript
npm run check

# Formatar código
npm run format
```

---

## 📊 Integração com Google Sheets

O formulário envia dados automaticamente para uma planilha Google Sheets através de um Google Apps Script.

**Dados coletados**:
- Data/Hora do cadastro
- Informações pessoais e profissionais
- Arquivo de currículo (se enviado)
- Link para download do currículo

---

## 🌐 Hospedagem

O site é hospedado gratuitamente no GitHub Pages.

**URL**: `https://seu-usuario.github.io/atitude-emprega-plus`

---

## 📈 SEO

O site inclui otimizações de SEO:

- Meta tags (title, description, keywords)
- Open Graph para redes sociais
- Schema.org para dados estruturados
- Sitemap.xml para indexação
- Robots.txt para mecanismos de busca
- URLs amigáveis
- Tipografia clara e legível
- Imagens otimizadas

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Contato

- **Email**: contato@atitudeemprega.com
- **WhatsApp**: (11) 99999-9999
- **Instagram**: @atitudeemprega
- **Facebook**: Atitude Emprega+

---

## 📄 Licença

Este projeto é fornecido como está para uso do Programa Atitude Emprega+.

---

## 🙏 Agradecimentos

Desenvolvido com ❤️ para inclusão, diversidade e empregabilidade da população LGBT+.

---

## 📚 Recursos Úteis

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [GitHub Pages Documentation](https://docs.github.com/pt/pages)
- [Vite Documentation](https://vitejs.dev)

---

**Última atualização**: 02/02/2026

Desenvolvido com ❤️ para inclusão e diversidade
