"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = require("pg");
exports.client = new pg_1.Client({
    database: process.env.POSTGRESDBNAME,
    password: process.env.POSTGRESDBPASSWORD,
    port: 5432,
    host: "localhost",
    user: "postgres",
});
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('sql7389341', 'sql7389341', 'Snfj4R523Z', {
    host: 'sql7.freemysqlhosting.net',
    dialect: 'mysql',
    port: 3306
});
sequelize.authenticate().then(res => console.log('connected')).catch(err => err ? console.log(err) : null);
//# sourceMappingURL=postgres.js.map