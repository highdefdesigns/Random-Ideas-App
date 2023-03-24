const express = require('express');
const port = 5501;

const app = express();

// Use this for POSTing (body parser middleware)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
