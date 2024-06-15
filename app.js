import express, {response} from 'express';
import { initGameBoard } from "./database.js";
import dotenv from 'dotenv'
import path from 'path'
const app = express();
const port = 8080;
dotenv.config();

app.use((err, request, response, next) => {
    console.error(err);
    response.status(500).send("Something broke!");
});

//try setting html on page
app.get('/', async (req, res) => {
    let arr = await initGameBoard();
    // res.send(``);
    // console.log(arr);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});