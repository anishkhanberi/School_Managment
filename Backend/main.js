import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
const app = express();


// dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, "../frontend")));
app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname , "../index.html"))
}); 

app.listen(9000 , (req , res) => {
    console.log("App is listening on Port http://localhost:9000")
});