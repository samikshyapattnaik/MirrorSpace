const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const http = require('http');
const userRoute = require('./routes/userRoutes');
const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));

// Serve static frontend files
const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, 'Mirror_Frontend', 'dist')));

// Routes
app.use('/users', userRoute);

// API: Chat message routes
const Message = mongoose.model(
  'Message',
  new mongoose.Schema({
    sender: String,
    text: String,
    timestamp: { type: Date, default: Date.now },
  })
);

app.post('/messages', async (req, res) => {
  const { sender, text } = req.body;
  const newMessage = new Message({ sender, text });
  await newMessage.save();
  res.status(201).send(newMessage);
});

app.get('/messages', async (req, res) => {
  const messages = await Message.find().sort({ timestamp: 1 });
  res.status(200).send(messages);
});

// // Catch-all route for SPA (React/Frontend)
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(_dirname, 'Mirror_Frontend', 'dist', 'index.html'));
// });

// Database connection
mongoose.connect(process.env.DATABASE_URL, {
  dbName: 'mirror_space',
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection failed:', err));

// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
