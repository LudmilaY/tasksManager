const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conection with MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro ao conectar MongoDB:', err));

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

