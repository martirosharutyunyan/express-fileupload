"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = require("pg");
exports.client = new pg_1.Client({
    port: 5432,
    database: process.env.postgresDBname,
    password: process.env.postgresDBpassword,
    // database:'usersDB',
    // password:'hhs13516',
    host: "localhost",
    user: "postgres",
});
//# sourceMappingURL=postgresSQL.js.map