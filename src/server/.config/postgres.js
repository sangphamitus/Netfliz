
const pg= require('pg');
require('dotenv').config();
const pgp = require("pg-promise")({});
const databaseConfig={
  host: "dpg-cds95jg2i3mrfommqci0-a.oregon-postgres.render.com",
  port: "5432",
  user: "netfliz_user",
  password: "Np0nCt3beth1JbDpHuFrGWKblH3J3uyP",
  database: "netfliz",
  ssl:true
}
const db = pgp(databaseConfig);
module.exports=
{
  getClient :async () => {
    const client = new pg.Client({
        host: "dpg-cds95jg2i3mrfommqci0-a.oregon-postgres.render.com",
        port: "5432",
        user: "netfliz_user",
        password: "Np0nCt3beth1JbDpHuFrGWKblH3J3uyP",
        database: "netfliz",
        ssl:true
      });
await client.connect();
  return client;
},
pgp,db
}

