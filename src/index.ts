import "reflect-metadata";
import { createConnection, DataSource } from "typeorm";
import { User } from "./entity/user";
import config from "./ormconfig";

const AppDataSource = new DataSource(config);
AppDataSource.initialize().then(async (connection) => {
  const userRepository = connection.getRepository(User);
  const user = new User();
  user.firstName = "Emi";
  user.lastName = "Roberti";
  user.isActive = true;
  await userRepository.save(user);
  const users = await userRepository.find();
  console.log(users);
});
