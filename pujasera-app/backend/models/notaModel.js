// notaModel.js
import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Nota = db.sequelize.define(
    "nota",
    {
        KodeNota: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        KodeTenan: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        KodeKasir: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        TglNota: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        JamNota: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        JumlahBelanja: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        Diskon: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        Total: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

export default Nota;

(async () => {
    await Nota.sync({ force: true });
})();
