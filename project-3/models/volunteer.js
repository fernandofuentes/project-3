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
        gender: {
            allowNull: true,
            type: DataTypes.STRING(11),
            validate: {
                len: [1, 11]
            }

        },
        
        guardian_email: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },

        address: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },

        busrider: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        }
    }, {

            timestamps: false

        });

    Student.associate = function (models) {

        Student.belongsTo(models.Bus, {
            foreignKey: {
                allowNull: true
            },
        });
    };

    return Student;

};
