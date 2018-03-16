var Sequelize = require( "sequelize" );

module.exports = function ( sequelize, DataTypes ) {

  var Comment = sequelize.define( 'Comment', {

      reviewee: {
        //name of person/place being reviewed
        allowNull: false,
        type: DataTypes.STRING( 50 ),

        validate: {
          len: [ 1, 25 ]
        }
      },

      reviewer: {
        //name of person/place given review
        allowNull: false,
        type: DataTypes.STRING( 50 ),
        // defaultValue: "Anonymous",


        validate: {
          len: [ 1, 25 ]
        }
      },

      comment: {
        allowNull: false,
        type: DataTypes.TEXT()
      }
    }, //end of 2nd argument


    {
      timestamps: true
    } )


  // Comment.associate = function ( models ) {
  //
  //   Comment.belongsTo( models.Volunteer, {
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   } );
  // };

  return Comment;
};