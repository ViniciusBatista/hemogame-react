const express = require('express');

const app = express();
const port = 5000;

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Teste react projeto hemogame' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
