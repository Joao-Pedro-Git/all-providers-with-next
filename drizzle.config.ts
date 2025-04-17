import "dotenv/config";
//! Pra carregar variáveis do .env no process.env. Sem ele, process.env.DATABASE_URL pode vir undefined.

export default {
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};
