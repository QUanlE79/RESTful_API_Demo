import _ from "./config/config.js";
import express from "express";
import morgan from "morgan";
import actorRoute from "./routes/actor.route.js";
import filmRoute from "./routes/film.route.js";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUi from "swagger-ui-express";
import swaggerOption from './docs/swaggerOption.js'
import logRoute from './routes/log.route.js'
import authRoute from './routes/auth.route.js'
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));




const swaggerDocs = swaggerJSDoc(swaggerOption);
//const swaggerOptionYAML = jsYaml.load(fs.readFileSync("./docs/swaggerOption.yaml", "utf8"));

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));

app.get('/', (req,res)=>{
    res.json({
        msg:'REST Api Demo'
    });
})

app.use('/api/v1/actors',actorRoute);
app.use('/api/v1/films',filmRoute);
app.use('/api/v1/logs',logRoute)
app.use('/api/v1/auth', authRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`Sakila API is listening at http://127.0.0.1:${process.env.PORT}`);
})