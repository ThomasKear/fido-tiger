module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
    	name: {
    		type:DataTypes.STRING,
    		validate: {
    			notNull: true
    		}
    	},
    	address: {
    		type: DataTypes.STRING
    	},
    	pet_name: {
    		type: DataTypes.STRING
    	},
    	email: {
    		type: DataTypes.STRING,
    		validate: {
    			isEmail: true
    		}
    	}
    });
    return Client;
};
