import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize';  // Ensure this is the correct path to your database connection

const FAQ = sequelize.define('FAQ', {
  faq_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'FAQs',  // Ensure it matches your table name
  timestamps: false,
});

export default FAQ;
