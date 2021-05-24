const knexCache = new Map();

require("dotenv").config();

const knex = require("knex");

let knex_config = {
  client: "mssql",
  connection: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    encrypt: false,
    connectionTimeout: 3000000,
    requestTimeout: 3000000,
    database: "",
    options: {
      enableArithAbort: true,
    },
  },
  pool: { min: 2, max: 5, idleTimeoutMillis: 3000000 },
  acquireConnectionTimeout: 3000000,
};

export default async function (banco: any) {
  let knexConnection = knexCache.get(banco);

  if (knexConnection) return knexConnection;

  const config = await getKnexConfig(banco);
  knexConnection = knex(config);
  knexCache.set(banco, knexConnection);
  return knexConnection;
};

const getKnexConfig = async (banco: any) => {
  knex_config.connection.database = banco;

  return knex_config;
};