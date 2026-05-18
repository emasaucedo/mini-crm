import { sequelize } from "../models";

export const getDashboard = async () => {
  // En desarrollo devolvemos datos de ejemplo. Se puede reemplazar
  // por consultas reales usando los modelos y sequelize.
  // Ejemplo de consultas comentadas:
  // const [leads] = await sequelize.query('SELECT COUNT(*) as count FROM leads');
  // const [deals] = await sequelize.query('SELECT COUNT(*) as count FROM deals');

  return {
    totalLeads: 1,
    totalDeals: 1,
    totalContacts: 1,
    totalCompanies: 1,
  };
};
