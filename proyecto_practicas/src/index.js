const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const clienteRoutes = require("./routes/cliente.js");
const hotelRoutes = require("./routes/hotel.js");
const reservaRoutes = require("./routes/reserva.js");
const habitacionRoutes = require("./routes/habitacion.js");
const cors = require("cors");

dotenv.config();


const app = express();


const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200
}));
app.options("*", cors());
app.use("/api", clienteRoutes);
app.use("/api", hotelRoutes);
app.use("/api", habitacionRoutes);
app.use("/api", reservaRoutes);

//routes
app.get("/", (req, res) => {
    res.send("bienvenido a la api");
});

//creando la conexión con mongo db
mongoose.connect(
        process.env.MONGODB_URI
    )
    .then(() => console.log("Contectado a la base de datos mongoDB"))
    .catch((err) => { console.error(err) });

app.listen(port, () => {
    console.log("server escuchando en el puerto ", port)
});