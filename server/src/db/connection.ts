import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('banco', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;