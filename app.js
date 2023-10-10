import _ from "./config/config.js";
import express from "express";
import morgan from "morgan";
import actorRoute from "./routes/actor.route.js"

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req,res)=>{
    res.json({
        msg:'REST Api Demo'
    });
})

app.use('/api/actor',actorRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`Sakila API is listening at http://127.0.0.1:${process.env.PORT}`);
})