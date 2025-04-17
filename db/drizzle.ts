import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defanied");
}
const client = postgres(process.env.DATABASE_URL!);

// cria uma instancia do Drizzle Orm
export const db = drizzle(client);
