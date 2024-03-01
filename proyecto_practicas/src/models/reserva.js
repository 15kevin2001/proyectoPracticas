const mongoose = require("mongoose");

const reservaSchema = mongoose.Schema({
    "id_cliente": {
        type: String
    },
    "id_hotel": {
        type: String
    },
    "fecha_reserva": {
        type: mongoose.Schema.Types.Date
    },
    "fechaIni": {
        type: mongoose.Schema.Types.Date
    },
    "fechaFin": {
        type: mongoose.Schema.Types.Date
    },
    "precio": {
        type: mongoose.Schema.Types.Number
    },
    "estado": {
        type: String
    }
})

module.exports = mongoose.model("Reserva", reservaSchema);