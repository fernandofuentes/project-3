var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    var Comment = sequelize.define('Comment', {
        review_type: {
          //user chooses if they're reviewing donors, vols or recipients
            allowNull: true,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        reviewee: {
          //name of person/place being reviewed
            allowNull: true,
            type: DataTypes.STRING(50),
            validate: {
                len: [1, 50]
            }

        },
        comment: {
            allowNull: true,
            type: DataTypes.TEXT(),
        }

    },
    {
      timestamps: false
    });

        // Comment.associate = function (models) {
        //
        //      Comment.belongsTo(models.comment, {
        //          foreignKey: {
        // allowNull: true
        //          },
        //      });
        //  };

    return Comment;

};
