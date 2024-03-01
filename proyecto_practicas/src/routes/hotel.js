const express = require("express");
const hotelSchema = require("../models/hotel.js");

const router = express.Router();

//obtener lista de hoteles
router.get("/hotel", (req, res) => {
    console.log("solicitud de hoteles");
    hotelSchema.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
})

//obtener  hotel por id
router.get("/hotel_porId", async(req, res) => {
    const { id } = req.query;
    console.log("hotel por ID: " + id)
    try {
        const resp = await hotelSchema.findOne({ "_id": id });

        if (resp) {
            res.json(resp);
        } else {
            res.status(404).json({ "message": "Hotel no encontrado" });
        }
    } catch (error) {
        res.json({ "message": error });
    }
});




module.exports = router;