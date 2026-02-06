const express = require("express");
const cors = require("cors");
const app = express();

const adminLogin = require("./routes/adminroute")
const callRequetRoutes = require("./routes/callRequestRoutes")
const purohitRoute =  require("./routes/purohitRoutes")
const bookpurohitpayment = require("./routes/paymentRoutes")
const operationTeam = require("./routes/AddOperationRoutes")

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT" , "DELETE" , "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.use(express.json()); 

app.use("/", adminLogin);
app.use("/api/call-request" , callRequetRoutes);
app.use("/api/purohits" , purohitRoute );
app.use("/api/allpurohits" , purohitRoute);
app.use("/api/payment", bookpurohitpayment);
app.use("/api/operation-team", operationTeam);



app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;
