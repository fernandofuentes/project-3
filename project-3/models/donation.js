var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var Donation = sequelize.define('Donation', {
        food_item: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        quantity: {
            allowNull: false,
            type: DataTypes.INT(50),
            validate: {
                len: [1, 50]
            }

        },
        donor_business_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        comments: {
            allowNull: true,
            type: DataTypes.STRING(50),
        }
    }, {

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        });

        Donation.associate = function (models) {

            Donation.belongsTo(models.donor, {
                foreignKey: {
                    allowNull: true
                },
            });
        };

    return Donor;

};
