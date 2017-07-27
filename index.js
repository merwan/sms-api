import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => res.json({status: "SMS API"}));

app.listen(PORT, () => console.log(`SMS API - Port ${PORT}`));
