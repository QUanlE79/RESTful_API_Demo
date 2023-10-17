import _ from "./config/config.js";
import express from "express";
import morgan from "morgan";
import actorRoute from "./routes/actor.route.js"
import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUi from "swagger-ui-express";
import option from './docs/openapi.js'
import cors from "cors"
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const swaggerDocs = swaggerJSDoc(option.option);
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));

app.get('/', (req,res)=>{
    res.json({
        msg:'REST Api Demo'
    });
})

app.use('/api/v1/actors',actorRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`Sakila API is listening at http://127.0.0.1:${process.env.PORT}`);
})