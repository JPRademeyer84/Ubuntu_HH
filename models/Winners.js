import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize';  // Ensure this path is correct
import User from './User';  // Ensure User model exists and is correctly set up
import Contest from './Contest';  // Ensure Contest model exists and is correctly set up

const Winner = sequelize.define('Winner', {
  winner_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  contest_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Contest,
      key: 'contest_id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  prize: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  awarded_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

// Set up relationships
Winner.belongsTo(User, { foreignKey: 'user_id' });
Winner.belongsTo(Contest, { foreignKey: 'contest_id' });

export default Winner;
