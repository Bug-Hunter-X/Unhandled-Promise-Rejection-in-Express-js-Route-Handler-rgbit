const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send('Hello World!');
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).json({ error: error.message }); // Send error to client
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  await new Promise(resolve => setTimeout(resolve, 100));
  throw new Error('Something went wrong!');
}