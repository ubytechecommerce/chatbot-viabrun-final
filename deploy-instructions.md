# 🚀 Como Colocar o Chatbot Online

## Opção 1: VERCEL (Recomendado - Gratuito)

### Passo 1: Criar conta no Vercel
1. Acesse: https://vercel.com
2. Clique em "Sign Up" 
3. Faça login com GitHub, Google ou email

### Passo 2: Fazer Upload
1. No Vercel, clique em "New Project"
2. Arraste a pasta `dist` (que foi criada no build)
3. OU: Clique em "Browse" e selecione a pasta `dist`
4. Clique em "Deploy"

### Passo 3: Obter Link
- Em 2-3 minutos terá um link como: `https://seu-projeto.vercel.app`
- Envie esse link para seu irmão testar!

---

## Opção 2: NETLIFY (Alternativa Gratuita)

### Passo 1: Acessar
- Site: https://netlify.com
- Clique em "Sign Up"

### Passo 2: Deploy
- Arraste a pasta `dist` na área "Drag and drop your site folder here"
- Aguarde o deploy
- Receba o link público

---

## Opção 3: NGROK (Prévia Rápida - 8 horas grátis)

### Passo 1: Baixar ngrok
- Site: https://ngrok.com
- Baixe o ngrok.exe

### Passo 2: Executar servidor local
```bash
npm run dev
```

### Passo 3: Expor online
```bash
ngrok http 3000
```

### Resultado:
- Link temporário: `https://abc123.ngrok.io`
- Válido por 8 horas gratuitas

---

## ⚡ Opção Mais Rápida (RECOMENDADA)

**VERCEL**: 
- 100% gratuito
- Link permanente  
- 5 minutos para colocar online
- Atualização automática

**Link será algo como:**
`https://chatbot-viabrun.vercel.app`

---

## Integração Inteligente: Frontend + Backend

> Para respostas instantâneas e inteligentes, envie as perguntas do usuário para a rota `/api/chat` do backend.

### Exemplo de chamada no frontend (React/JS):
```js
const resposta = await fetch('https://SEU_BACKEND/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ pergunta: 'Qual o preço do rádio Baofeng?' })
});
const data = await resposta.json();
console.log(data.resposta); // Resposta pronta do backend
```

- O backend busca no FAQ e no banco local (`produtos.json`).
- Só aciona a IA (Gemini) se não encontrar resposta local.
- O frontend só precisa exibir a resposta recebida.

**Importante:**
- O backend precisa estar online (Vercel, Netlify, VPS ou local com ngrok).
- O frontend deve apontar para o endereço público do backend.
