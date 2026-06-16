import { sequelize } from '../config/db';
import { initUser } from './User';
import { initContact } from './Contact';
import { initCompany } from './Company';
import { initDeal } from './Deal';
import { initTask } from './Task';
import { initNote } from './Note';
import { initLead } from './Lead';

export const initModels = () => {
  const User = initUser(sequelize);
  const Contact = initContact(sequelize);
  const Company = initCompany(sequelize);
  const Deal = initDeal(sequelize);
  const Task = initTask(sequelize);
  const Note = initNote(sequelize);
  const Lead = initLead(sequelize);

  User.hasMany(Contact, { foreignKey: 'user_id' });
  User.hasMany(Deal, { foreignKey: 'user_id' });
  User.hasMany(Task, { foreignKey: 'user_id' });
  User.hasMany(Note, { foreignKey: 'user_id' });
  User.hasMany(Lead, { foreignKey: 'user_id' });

  Contact.belongsTo(Company, { foreignKey: 'company_id' });

  Deal.hasMany(Task, { foreignKey: 'deal_id' });
  Deal.hasMany(Note, { foreignKey: 'deal_id' });
};

initModels();

export { sequelize };
