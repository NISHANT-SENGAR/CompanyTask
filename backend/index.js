const express = require('express');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const cors = require('cors');

const app = express();
const adapter = new FileSync('../db/mainit-request.json');
const db = low(adapter);

// Initialize db
db.defaults({ requests: [] }).write();

app.use(cors());
app.use(bodyParser.json());

// Create a request
app.post('/api/requests', (req, res) => {
  const newRequest = { id: Date.now().toString(), ...req.body };
  db.get('requests').push(newRequest).write();
  res.status(201).send(newRequest);
});

// Get all requests
app.get('/api/requests', (req, res) => {
  const requests = db.get('requests').filter(request => !request.closed).value();
  res.send(requests);
});

// Close a request
app.put('/api/requests/:id/close', (req, res) => {
  const { id } = req.params;
  db.get('requests').find({ id }).assign({ closed: true }).write();
  res.send({ message: 'Request closed' });
});

app.listen(3000, () => console.log('connected')
)
