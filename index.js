const express = require("express");
const { userRouter } = require("./routes/user.route");
const { connection } = require("./config/db");
const { noteRouter } = require("./routes/note.route");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.use("/notes", noteRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to DB");
    console.log(`server started at port ${process.env.port}`);
  } catch (err) {
    console.log(err);
  }
});

/**
 {
  "title":"go Lang",
  "body":"new note added"
}

{  
"email":"p@gmail.com",
"password":"1234"
}
 */
