import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
 
//This is where the port where the website will be runinng and listening
const PORT = process.env.PORT || 3000;
// Create __dirname and __filename variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const name = process.env.NAME; // <-- NEW

const app = express();
 
app.use(express.static(path.join(__dirname, 'public')));
 

/**********
 * Routes
 **********/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/home.html'));
});
 
app.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/page1.html'));
});
 
app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/page2.html'));
});

// app.get('/', (req, res) => {
//     res.send(`Hello, ${name}!`); // <-- UPDATED
// });
 

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});