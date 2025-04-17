// db/schema.ts
import { pgTable, varchar, timestamp, serial } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }),
  password: varchar("password", { length: 255 }),
});

export const session = pgTable("session", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 255 }),
  expiresAt: timestamp("expires_at"),
});

export const account = pgTable("account", {
  id: serial("id").primaryKey(),
  provider: varchar("provider", { length: 255 }),
  providerAccountId: varchar("provider_account_id", { length: 255 }),
  userId: varchar("user_id", { length: 255 }),
});

export const verification = pgTable("verification", {
  id: serial("id").primaryKey(),
  identifier: varchar("identifier", { length: 255 }),
  token: varchar("token", { length: 255 }),
  expires: timestamp("expires"),
});
