const mongoose=require("mongoose");
uri="mongodb+srv://zoheb:zoheb7979@zohebdb.z434ks5.mongodb.net/ZohebDB?retryWrites=true&w=majority";
const connectdb=async()=> {
    try {
        await mongoose.connect(uri, {
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