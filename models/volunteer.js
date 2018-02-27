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
            type: DataTypes.STRING(15),
            validate: {
                len: [1, 15]
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
    },
    
    {
      timestamps: false
    });


    Volunteer.associate = function (models) {

         Volunteer.hasMany(models.Comment, {
             foreignKey: {
    allowNull: true
             },
         });
     };

    return Volunteer;

};
