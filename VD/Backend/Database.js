const mongoose = require("mongoose");

const connectToMongo = () => {
  try {
    mongoose.connect(
      "mongodb+srv://vallabh2002:vallabh2002@vdprojects.gmgyj.mongodb.net/VD_LearnNest?retryWrites=true&w=majority&appName=vdprojects"
    );
    console.log("connected to mongo");
  } catch (error) {
    console.log("not connected");
  }
};

module.exports = connectToMongo;
