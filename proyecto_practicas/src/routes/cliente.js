const express = require("express");
const clienteSchema = require("../models/cliente.js");

const router = express.Router();

//obtener lista de clientes
router.get("/cliente", (req, res) => {
    clienteSchema.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
})

//obtener  cliente por correo
router.get("/Cliente_porCorreo", async(req, res) => {
    const { email } = req.query;

    try {
        const user = await clienteSchema.findOne({ "correo_electronico": email });

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ "message": "Usuario no encontrado" });
        }
    } catch (error) {
        res.json({ "message": error });
    }
});

//validar la existencia de un usuario por correo
router.get("/ExisteCliente_porCorreo", async(req, res) => {
    const { email } = req.query;

    try {
        const existingUser = await clienteSchema.findOne({ "correo_electronico": email });

        if (existingUser) {
            res.json({ "encontrado": true });
        } else {
            res.json({ "encontrado": false });
        }
    } catch (error) {
        res.json({ "message": error });
    }
});


router.post("/cliente_login", async(req, res) => {
    console.log("peticion de login");
    const { usuario, password } = req.body;
    try {
        const user = await clienteSchema.findOne({ "usuario": usuario });
        if (user) {
            if (user.password === password) {
                res.json({ code: 0, message: "Credenciales válidas: Usuario existe." });
            } else {
                res.json({ code: 1, message: "Credenciales inválidas: Contraseña incorrecta." });
            }
        } else {
            res.json({ code: 2, message: "Credenciales inválidas: Usuario no encontrado." });
        }
    } catch (error) {
        console.log("error en el try");
        res.status(400).json({ message: error.message });
    }
});



module.exports = router;