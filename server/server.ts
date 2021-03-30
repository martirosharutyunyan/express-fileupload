import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import morgan from 'morgan';
import cors from 'cors'
import path from 'path';
import  { graphqlHTTP } from 'express-graphql';
import { client } from './model/postgres'
// import { schema } from './schema/schema';//scheman sarqeluc heto
const app = express();
const port:string | number = process.env.port;
import fileupload from 'express-fileupload';



app.use(cors())
app.use(fileupload())
app.use(morgan(`dev`));
app.use(express.json())
app.use(express.urlencoded({
   extended: false
}))
app.use(express.static('files'))
// app.use('/graphql',graphqlHTTP({
//     schema,
//     graphiql:true
// })) // scheman sarqeluc heto
app.use('/upload',require('./router/Upload'))

app.listen(port, () => console.log(`server is runnig on port ${port}`));