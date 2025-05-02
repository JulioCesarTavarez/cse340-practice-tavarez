import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
 
//This is where the port where the website will be runinng and listening
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'production';
// Create __dirname and __filename variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const name = process.env.NAME; // <-- NEW

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'src', 'views'));

/**********
 * Routes
 **********/
app.get('/', (req, res) => {
    const title = 'Home Page';
    const content = `<h1>Welcome to the ${title}</h1><p>This is the main content of the ${title}</p>`;
    res.render('index', {title, content});
});
app.get('/about', (req, res) => {
    const title = 'About Page';
    const content = `
    <h1>Julio Cesar Tavarz</h1>
    <img src="./images/me.jpg" alt="Profile Picture">
    <p>I'm a software engineering student at BYU-Idaho with a strong foundation in Python, SQL, and JavaScript. I'm passionate about creating dynamic websites and smart device projects using tools like Arduino. With experience in both frontend and backend development, I'm building skills in data science and enjoy learning through hands-on projects. I've also explored server monitoring, GPS tracking systems, and database-driven applications.</p>`;
    res.render('index', {title, content});
});
app.get('/contact', (req, res) => {
    const title = 'Contact Page';
    const content = `
    <form action="/submit" method="POST">
        <input type="text" name="name" placeholder="Name"><br>
        <input type="email" name="email" placeholder="Email"><br>
        <textarea name="message" placeholder="Message"></textarea><br>
        <input type="submit" value="Submit">
    </form>`;
    res.render('index', {title, content});
})
 

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});