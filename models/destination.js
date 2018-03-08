var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var Destination = sequelize.define('Destination', {
        recipient_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        phone_number: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        email_address: {
            allowNull: false,
            type: DataTypes.STRING(15),
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
        }   
    },
    {
      timestamps: false
    });

    Destination.associate = function (models) {

         Destination.hasMany(models.Comment, {
             foreignKey: {
    allowNull: true
             },
         });
     };

    return Destination;

};
