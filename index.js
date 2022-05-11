const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require('path')
// require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://mongo:vikaspandey@cluster0.pznxs.mongodb.net/mernproject?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:false,
  }) 
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB is connceted successfully");
// });

const exercisesRouter = require("./router/exercises");
const usersRouter = require("./router/users");
const updates = require("./router/update");
const deletes = require("./router/delete");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.use("/update", updates);
app.use("/delete", deletes); 

// _dirname=path.resolve();
// if(process.env.NODE_ENV == "production"){
//   app.use(express.static(path.join(__dirname, '/frontend/build')));
//   app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(_dirname,'frontend','build','index.html'))
//   })
// }

app.listen( PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
 