const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3845;

app.use(cors());

app.get('/sse', (req, res) => {
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  res.flushHeaders();

  res.write(`data: Connected at ${new Date().toISOString()}\n\n`);

  const interval = setInterval(() => {
    res.write(`data: Ping at ${new Date().toISOString()}\n\n`);
  }, 5000);

  req.on('close', () => {
    clearInterval(interval);
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`✅ SSE server running at http://127.0.0.1:${PORT}/sse`);
});
