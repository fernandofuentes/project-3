var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var Donor = sequelize.define('Donor', {
        business_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        business_type: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        phone_number: {
            allowNull: false,
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
        manager_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }
        },
        manager_phone_number: {
            allowNull: false,
            type: DataTypes.STRING(15),
            validate: {
                len: [1, 15]
            }
        }
    },
    {
      timestamps: false
    });

    Donor.associate = function (models) {

         Donor.hasMany(models.Comment, {
             foreignKey: {
    allowNull: true
             },
         });
     };

    return Donor;

};
