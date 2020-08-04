module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING,
        description:DataTypes.TEXT
    }, {
        timestamps: false
    });
    Category.associate = function (models) {
        Category.hasMany(models.Post, {
            foreignKey: 'id_category'
        });
    };
    return Category;
};