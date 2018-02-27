var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var Comment = sequelize.define('Comment', {
        review_type: {
          //user chooses if they're reviewing donors, vols or recipients
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        reviewee: {
          //name of person/place being reviewed
            allowNull: false,
            type: DataTypes.STRING(50),
            defaultValue: "Anonymous",

            validate: {
                len: [1, 50]
            }
        },
        comment: {
            allowNull: false,
            type: DataTypes.TEXT()
        }
      },//end of 2nd argument


      {
           timestamps: true
    })

        // Comment.associate = function (models) {
        //
        //      Comment.belongsTo(models.Volunteer, {
        //          foreignKey: {
        // allowNull: true
        //          },
        //      });
        //  };


         // Comment.associate = function (models) {
         //
         //      Comment.belongsTo(models.Donor, {
         //          foreignKey: {
         // allowNull: true
         //          },
         //      });
         //  };
         //
         //
         //  Comment.associate = function (models) {
         //
         //       Comment.belongsTo(models.Destination, {
         //           foreignKey: {
         //  allowNull: true
         //           },
         //       });
         //   };

    return Comment;

};
