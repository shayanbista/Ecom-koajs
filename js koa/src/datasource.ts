import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "postgres",
  // logging: true,
  synchronize: true,
  entities: ["src/entity/**/*.ts"],
  subscribers: [],
  migrations: ["./src/migration/**/*.ts"],
  migrationsRun: true,
});
