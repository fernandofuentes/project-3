var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var Volunteer = sequelize.define('Volunteer', {
        volunteer_last_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        volunteer_first_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        phone_number: {
            allowNull: true,
            type: DataTypes.STRING(14),
            validate: {
                len: [1, 14]
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
        vehicle: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }
        }
    }, {
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        });

    return Volunteer;

};
