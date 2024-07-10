import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "manashama_24",
    port: 5432,
  });
  //connecting to the database checked 
  db.connect();
  app.get('/counters', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM counters');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.post('/counters', async (req, res) => {
    const { buttonName, counterValue, ballValue } = req.body;
    try {
      await pool.query(
        'INSERT INTO counters (button_name, counter_value, ball_value) VALUES ($1, $2, $3) ON CONFLICT (button_name) DO UPDATE SET counter_value = $2, ball_value = $3',
        [buttonName, counterValue, ballValue]
      );
      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });




document.addEventListener("onclick",buttonAnimation)

function buttonAnimation(){
    
    pressKey.classList.add("pressed");
    setTimeout(function(){pressKey.classList.remove("pressed")},100);
}