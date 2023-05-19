const mongoose=require("mongoose");
const connectdb=async()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("DB Connected");
    
        // const zcollSchema = new mongoose.Schema({
        //     name: String,
        //     usn: String,
        //     intrest: String,
        //   });
        //   // Define a Mongoose model for your collection
        //   const Zcoll = mongoose.model("zcoll", zcollSchema); 
        //   // Fetch all documents from the collection
        //   const documents = await Zcoll.find(); 
        //   // Log the results to the console
        //   console.log(documents);
        
      } catch (error) {
        console.log(error);
      }
    
};
module.exports =connectdb;