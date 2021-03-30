import { Client } from "pg";

export const client = new Client({
    database: process.env.POSTGRESDBNAME,
    password: process.env.POSTGRESDBPASSWORD,
    port: 5432,
    host: "localhost",
    user: "postgres",
});

import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize('sql7389341','sql7389341','Snfj4R523Z',{
//     host:'sql7.freemysqlhosting.net',
//     dialect:'mysql',
//     port:3306
// })




// sequelize.authenticate().then(res=>console.log('connected')).catch(err=>err?console.log(err):null)

