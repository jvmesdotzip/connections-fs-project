import express, {response} from 'express';
import { initGameBoard } from "./database.js";
import dotenv from 'dotenv'
import path from 'path'
const app = express();
const port = 8080;
dotenv.config();

app.use((err, request, response, next) => {
    console.error(err);
    // res.status(500).send("Something broke!");
});

//try setting html on page
app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.get('/gameboard', async (req, res) => {
    const gameboardList = await initGameBoard();
    res.send(gameboardList);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});