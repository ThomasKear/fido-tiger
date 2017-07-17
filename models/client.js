module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define("Client", {});
    return Client;
};