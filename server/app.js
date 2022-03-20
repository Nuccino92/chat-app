const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { sequelize } = require("./models");

const registerRoutes = require("./routes/register.js");
const contactRoutes = require("./routes/contacts.js");
const logInRoutes = require("./routes/logIn.js");
const conversationRoutes = require("./routes/conversation.js");
const messageRoutes = require("./routes/messages.js");

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`server connected on ${PORT}`);
  await sequelize.authenticate();
});

app.use("/register", registerRoutes);
app.use("/contact", contactRoutes);
app.use("/logIn", logInRoutes);
app.use("/conversation", conversationRoutes);
app.use("/messages", messageRoutes);
