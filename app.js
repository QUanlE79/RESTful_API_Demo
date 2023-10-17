import _ from "./config/config.js";
import express from "express";
import morgan from "morgan";
import actorRoute from "./routes/actor.route.js";
import filmRoute from "./routes/film.route.js";
import cors from "cors";


const app = express();



app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req,res)=>{
    res.json({
        msg:'REST Api Demo'
    });
})

app.use('/api/v1/actors',actorRoute);
app.use('/api/v1/films',filmRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`Sakila API is listening at http://127.0.0.1:${process.env.PORT}`);
})