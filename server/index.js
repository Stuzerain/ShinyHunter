const app = require('./app.js');

const PORT = 3000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
  console.log(`ShinyHunter is listening at http://${HOST}:${PORT}`)
})