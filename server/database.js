import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

//has password dont commit
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export async function initGameboard() {
    await pool.query("use playground");
    let board = [];
    let [rows] = await pool.query("SELECT * FROM Words WHERE set_id = (SELECT set_id FROM Sets WHERE publish_date = '2024-05-27')");
    for (let i = 0; i < rows.length; i++) {board[i] = rows[i].word}
    return board;
}
