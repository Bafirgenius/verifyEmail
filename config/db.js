const mongoose = require('mongoose');
// require('dotenv').config();
console.log(process.env.MONGO_URL, 'ini mongoo');
const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${connection.connection.host}`);
};

module.exports = connectDB;
