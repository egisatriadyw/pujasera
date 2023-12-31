// kasirModel.js
import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Kasir = db.sequelize.define(
    "kasir",
    {
        KodeKasir: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        Nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        HP: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

export default Kasir;

(async () => {
    await Kasir.sync({ force: true });
})();
