const mongoose = require('mongoose')

mongoose
  .connect("mongodb+srv://vgauravkumar:eumag@cluster0.mi6t8.mongodb.net/" + "Linker", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    //connected
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err.stack, "DB not connected");
  });

mongoose.Promise = global.Promise

module.exports = {
    mongoose
}