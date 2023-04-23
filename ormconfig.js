const fs = require('fs');

const extra = (process.env.DB_SSL === 'true') ?
   {
      ssl: {
         rejectUnauthorized: (process.env.DB_REJECT_UNAUTHORIZED === 'true'),
         ca: fs.readFileSync(process.env.DB_CA).toString(),
         key: fs.readFileSync(process.env.DB_KEY).toString(),
         cert: fs.readFileSync(process.env.DB_CERT).toString()
      }
   } :
   {}

module.exports = {
   type: 'postgres',
   host: process.env.DB_HOST,
   port: Number(process.env.DB_PORT),
   username: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   ssl: (process.env.DB_SSL === 'true'),
   extra: extra,
   synchronize: false,
   logging: true,
   // options: { encrypt: true },
   entities: ['dist/**/*.entity{.js,.ts}'],
   migrations: ['dist/migrations/*{.js,.ts}'],
   cli: {
      migrationsDir: 'src/migrations/'
   }
}