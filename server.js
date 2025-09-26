// Configuração do ambiente
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Importa o servidor
const { app, PORT } = require('./dist-server/services/server.js');

// Mensagem de inicialização
console.log(`🔄 Ambiente: ${process.env.NODE_ENV}`);
console.log(`🚀 Servidor pronto em http://localhost:${PORT}`);
