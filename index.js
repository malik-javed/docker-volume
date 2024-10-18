const express = require("express");
const app = express();
const PORT = 5500;

app.get("/", (req, res) => [
  res.json([
    {
      id: "1",
      name: "Malik Javed",
      age: "20",
    },
    {
      id: "2",
      name: "Suhaib Siddiqui",
      age: "22",
    },
    {
      id: "3",
      name: "Satyam",
      age: "25",
    },
    {
      id: "4",
      name: "Owais Haris Siddiqui",
      age: "25",
    },
  ]),
]);

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.listen(PORT, () => {
  console.log(`Servere running on ${PORT}`);
});
