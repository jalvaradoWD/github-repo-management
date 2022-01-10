import express from 'express';
const PORT = 8080 || process.env.PORT;

const server = express();

server.get('/', (req, res) => {
  return res.status(200).json({ message: 'Server is setup successfully' });
});

server.listen(PORT, () => console.log(`Server is on http://localhost:${PORT}`));
