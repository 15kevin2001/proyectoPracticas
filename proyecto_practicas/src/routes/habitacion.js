const express = require("express");
const habitacionSchema = require("../models/habitacion.js");

const router = express.Router();

//obtener  habitaciones relacionadas con un hotel determinado
router.get("/habitacion_porHotel", async(req, res) => {
    const { id } = req.query;
    console.log(id);
    try {
        //const resp = await habitacionSchema.distinct("tipo_habitacion", { "id_hotel": id });
        const resp = await habitacionSchema.aggregate([
            { $match: { id_hotel: id } },
            {
                $group: {
                    _id: "$tipo_habitacion",
                    habitaciones: { $push: "$$ROOT" }
                }
            },
            {
                $replaceRoot: { newRoot: { $mergeObjects: ["$$ROOT.habitaciones"] } }
            }
        ]);


        if (resp.length > 0) {
            res.json(resp);
        } else {
            res.status(404).json({ "message": "Habitaciones no encontradas" });
        }
    } catch (error) {
        res.json({ "message": error });
    }
});

//obtener  habitaciones relacionadas con un hotel y categoría determinado
router.get("/habitacion_porCategoria", async(req, res) => {
    const { id, tipo } = req.query;
    console.log(id);
    console.log(tipo);
    try {
        const resp = await habitacionSchema.find({ "id_hotel": id, "tipo_habitacion": tipo });

        if (resp.length > 0) {
            res.json(resp);
        } else {
            res.status(404).json({ "message": "Habitaciones no encontradas" });
        }
    } catch (error) {
        res.json({ "message": error });
    }
});


module.exports = router;