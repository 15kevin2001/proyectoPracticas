const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
    "_id": {
        type: String
    },
    "id_arrendador": {
        type: String
    },
    "nombre": {
        type: String
    },
    "dirección": {
        type: String
    },
    "descripción": {
        type: String
    },
    "departamento": {
        type: String
    },
    "provincia": {
        type: String
    },
    "distrito": {
        type: String
    }
})

module.exports = mongoose.model("Hotel", hotelSchema);