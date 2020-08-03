module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      },
      id_category: {
        type: DataTypes.INTEGER
      }
    }, {
        timestamps: false
    });
    Post.associate = function (models) {
        Post.belongsTo(models.Category, {
            foreignKey: 'id_category',
            targetKey: 'id'
        });
    };
    return Post;
};