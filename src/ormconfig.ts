import { DataSourceOptions } from "typeorm";

const isProduction = process.env.NODE_ENV === "production";

const config: DataSourceOptions = {
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: true,
  entities: isProduction ? ["dist/entity/**/*.js"] : ["src/entity/**/*.ts"],
  // cli: {
  //   entitiesDir: "src/entity",
  // },
};

export default config;
