import database from "../config/database.js";

class Partida {
    constructor() {
        this.model = database.db.define("partida", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            // desc = descrição
            desc: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            data: {
                type: database.db.Sequelize.DATE,
                allowNull: false
            },
            vencedor: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            }
        })        
    }
}

export default new Partida().model