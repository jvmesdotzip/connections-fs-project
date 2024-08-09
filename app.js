import express, {response} from 'express';
import { initGameBoard } from "./database.js";
import dotenv from 'dotenv'
import path from 'path'
const app = express();
const port = 8080;
dotenv.config();
const __dirname = path.resolve()

app.use((err, request, response, next) => {
    console.error(err);
    // res.status(500).send("Something broke!");
});

app.use(express.static(path.join(__dirname, 'public')));

//try setting html on page
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'connections-page.html'));
});

app.get('/gameboard', async (req, res) => {
    try {
        const gameboardList = await initGameBoard();
        if (gameboardList.length) {
            res.send({result:[...gameboardList]});
        }
    } catch (e) {
        console.error(e);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});