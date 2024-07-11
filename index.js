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
    database: "Mytools",
    password: "manashama_24",
    port: 5432,
  });
  //connecting to the database checked 
  db.connect();
  app.get('/', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM counters');
      
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.post('/counters', async (req, res) => {
    const { butto, counto, ballo } = req.body;
    console.log(req.body);
    /*try {
      await db.query(
        'INSERT INTO counters (button_name, counter_value, ball_value) ',
        [butto, counto, ballo]
      );
      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }*/
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });




//document.addEventListener("onclick",buttonAnimation)

/*function buttonAnimation(){
    
    pressKey.classList.add("pressed");
    setTimeout(function(){pressKey.classList.remove("pressed")},100);
}*/
