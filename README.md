# TypeORM TypeScript SQLite Example

This project demonstrates the use of TypeORM with TypeScript and SQLite. It includes a basic example of how to define and manipulate an `User` entity.

## Project Structure

- **src/entity/User.ts**: The `User` entity that is mapped to the database.
- **src/index.ts**: The main entry point of the application.
- **ormconfig.ts**: Dynamic configuration for TypeORM, allowing different setups for development and production.
- **database.sqlite**: The SQLite database used for this project.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **TypeScript**: The project uses TypeScript, so make sure you have `tsc` available.
- **SQLite**: SQLite is used as the database in this project.

## Installation

Clone the repository and navigate to the project directory. Then run:

```bash
npm install
```

Development Setup

In development mode, the application uses TypeScript files. To run the application:

```bash
ts-node ./src/index.ts
```

Running the Application

```bash
npm run start:dev
```

This will execute the project using ts-node, and the entities will be loaded from the src/entity directory.

To compile the TypeScript files to JavaScript for production:

```bash
npm run build
```

## Configuration

The project uses a dynamic ormconfig.ts file that switches between using .ts files in development and .js files in production. You can find this configuration in ormconfig.ts.

```typescript
import { DataSourceOptions } from "typeorm";

const isProduction = process.env.NODE_ENV === "production";

const config: DataSourceOptions = {
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: true,
  entities: isProduction ? ["dist/entity/**/*.js"] : ["src/entity/**/*.ts"],
};

export default config;
```

## Entity Definition

The User entity is defined in src/entity/user.ts:

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column({ nullable: true })
  lastName!: string;

  @Column({ default: true })
  isActive!: boolean;
}
```
