module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define(
      "review",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        text: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        rate: {
          type: DataTypes.INTEGER,
          allowNull: false,
        }
      }
    );
  
    Review.associate = models => {
      Review.belongsTo(models.Article);
    };
    return Review;
  };
  