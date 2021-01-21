module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define(
      "article",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        headline: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        subhead: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cover: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  
    Article.associate = models => {
      Article.hasMany(models.Review);
      Article.belongsTo(models.Author);
      Article.belongsTo(models.Category);
    };
    return Article;
  };
  