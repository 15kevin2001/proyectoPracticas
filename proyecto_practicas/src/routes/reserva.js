const express = require("express");
const reservaSchema = require("../models/reserva.js");

const router = express.Router();

//obtener lista de reservas
router.get("/reserva", (req, res) => {
    console.log("solicitud de hoteles");
    reservaSchema.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
})

//obtener  reserva por id
router.get("/reserva_porId", async(req, res) => {
    const { id } = req.query;
    try {
        const resp = await reservaSchema.findOne({ "_id": id });

        if (resp) {
            res.json(resp);
        } else {
            res.status(404).json({ "message": "Reserva no encontrado" });
        }
    } catch (error) {
        res.json({ "message": error });
    }
});


// Ruta para registrar un nuevo proyecto
router.post("/reserva", async(req, res) => {
    try {
        const { id_cliente, id_hotel, fechaIni, fechaFin, precio } = req.body;

        const nuevoReserva = new reservaSchema(req.body);

        nuevoReserva.estado = "pendiente"

        nuevoReserva.fecha_reserva = new Date();

        const reservaGuardado = await nuevoReserva.save();

        return res.status(201).json({ mensaje: "Proyecto registrado exitosamente", reserva: reservaGuardado });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});




module.exports = router;