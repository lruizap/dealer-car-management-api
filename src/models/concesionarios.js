// models/concesionarios.js

let concesionarios = [
  {
    id: 1,
    nombre: "Concesionario A",
    direccion: "Calle Falsa 123",
    coches: [
      { cocheId: 1, modelo: "Clio", cv: 75, precio: 15000 },
      { cocheId: 2, modelo: "Megane", cv: 100, precio: 20000 },
    ],
  },
  {
    id: 2,
    nombre: "Concesionario B",
    direccion: "Avenida Real 456",
    coches: [
      { cocheId: 3, modelo: "Focus", cv: 90, precio: 18000 },
    ],
  },
];

module.exports = concesionarios;
