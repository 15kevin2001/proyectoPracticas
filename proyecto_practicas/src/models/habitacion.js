const mongoose = require("mongoose");

const habitacionSchema = mongoose.Schema({
    "_id": {
        type: String
    },
    "_id_habitacion": {
        type: String
    },
    "id_hotel": {
        type: String
    },
    "cantidad_camas": {
        tyype: mongoose.Schema.Types.Number
    },
    "tipo_habitacion": {
        type: String
    },
    "tipo_camas": {
        type: String
    },
    "precio": {
        type: mongoose.Schema.Types.Number
    },
    "metros": {
        tyype: mongoose.Schema.Types.Number
    }
})

module.exports = mongoose.model("Habitacion", habitacionSchema);