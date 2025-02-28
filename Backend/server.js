const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require("cors");
require("dotenv").config();
const sequelize = require("../Backend/dbConfing/db"); 



const app = express();
// Middleware
app.use(cookieParser()); 
app.use(express.json());

const corsOptions = {
    origin: ' http://localhost:5173', 
    credentials: true, 
};
app.use(cors(corsOptions));


// Routes




const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }) 
    .then(() => {
        console.log("✅ Database synced successfully");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Database sync error:", err);
    });