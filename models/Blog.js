import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize';  // Ensure correct path to sequelize instance
import User from './User';  // Assuming blog posts are authored by users

const Blog = sequelize.define('Blog', {
  blog_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'blog',  // Explicitly specify the table name
  timestamps: false,
});

// Set up relationship between Blog and User
Blog.belongsTo(User, { foreignKey: 'author_id' });

export default Blog;
