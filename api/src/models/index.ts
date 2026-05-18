import { sequelize } from "../config/db";
import { initUser } from "./User";
import { initContact } from "./Contact";
import { initCompany } from "./Company";
import { initDeal } from "./Deal";
import { initTask } from "./Task";
import { initNote } from "./Note";
import { initLead } from "./Lead";

export const initModels = () => {
  initUser(sequelize);
  initContact(sequelize);
  initCompany(sequelize);
  initDeal(sequelize);
  initTask(sequelize);
  initNote(sequelize);
  initLead(sequelize);
};

initModels();

export { sequelize };
