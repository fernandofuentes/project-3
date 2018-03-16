var Sequelize = require( "sequelize" );

module.exports = function ( sequelize, DataTypes ) {

  var Donation = sequelize.define( 'Donation', {
    food_item: {
      allowNull: false,
      type: DataTypes.STRING( 50 ),
      validate: {
        len: [ 1, 50 ]
      }

    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER( 50 ),
      validate: {
        len: [ 1, 50 ]
      }

    },
    donor_business_name: {
      allowNull: false,
      type: DataTypes.STRING( 50 ),
      validate: {
        len: [ 1, 50 ]
      }

    }
  }, {
    timestamps: true
  } );

  // Donation.associate = function ( models ) {
  //
  //   Donation.belongsTo( models.Donor, {
  //     foreignKey: {
  //       allowNull: true
  //     },
  //   } );
  // };

  return Donation;

};