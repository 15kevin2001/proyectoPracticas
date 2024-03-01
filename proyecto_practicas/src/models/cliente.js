const mongoose = require("mongoose");

const clienteSchema = mongoose.Schema({
    "_id": {
        type: String
    },
    "nombre": {
        type: String
    },
    "apellido": {
        type: String
    },
    "correo_electronico": {
        type: String
    },
    "telefono": {
        type: String
    },
    "usuario": {
        type: String
    },
    "password": {
        type: String
    }
})

module.exports = mongoose.model("Cliente", clienteSchema);