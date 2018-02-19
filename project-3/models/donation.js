var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var Donation = sequelize.define('Dononation', {
        food_item: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        date_time_posted: {
            allowNull: false,
            type: DataTypes.STRING(50),
            timestamps: false,
            validate: {
                len: [1, 50]
            }

        },
        date_time_dispatched: {
            allowNull: true,
            type: DataTypes.STRING(11),
            validate: {
                len: [1, 11]
            }

        },
        email_address: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        physical_address: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        manager_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }
        },
        manager_phone_number: {
            allowNull: false,
            type: Datatypes.STRING(11),
            validate: {
                len: [1, 50]
            }
        },
        comments: {
            allowNull: true,
            type: DataTypes.STRING(50),
        }
    }, {

            timestamps: false

        });

    Donor.associate = function (models) {

        Donor.belongsTo(models.Bus, {
            foreignKey: {
                allowNull: true
            },
        });
    };

    return Donor;

};
