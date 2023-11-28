// tenanModel.js
import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Tenan = db.sequelize.define(
    "tenan",
    {
        KodeTenan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        NamaTenan: {
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

export default Tenan;

(async () => {
    await Tenan.sync({ force: true });
})();
