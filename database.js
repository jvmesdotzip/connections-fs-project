import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE //points to 'playground' db not 'connectionsdatabase'
}).promise();

export async function initGameBoard() {
    const [words] = await pool.query("SELECT * FROM Words WHERE set_id = (SELECT set_id FROM Sets WHERE publish_date = \"2024-05-27\")");
    let arr = [];
    for (let i = 0; i < words.length; i++) {arr[i] = words[i].word}
    return arr;
}

// console.log(await initGameBoard());

export function test() {
    console.log("Hello, World!");
}