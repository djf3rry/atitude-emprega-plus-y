// Google Apps Script para integração com Google Planilhas
// Instruções de uso:
// 1. Acesse Google Apps Script (https://script.google.com)
// 2. Crie um novo projeto
// 3. Cole este código
// 4. Crie uma nova planilha no Google Sheets
// 5. Copie o ID da planilha (da URL)
// 6. Substitua "SEU_SPREADSHEET_ID" abaixo pelo ID real
// 7. Crie uma aba chamada "Cadastros"
// 8. Publique como Web App (Deploy > New deployment > Type: Web app)
// 9. Configure para executar como seu usuário
// 10. Copie a URL do Web App e substitua em Home.tsx

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
