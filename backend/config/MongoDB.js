import mongoose from "mongoose";
const connectDataBase = async() =>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL,
            {useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log('Connected to Mongo DB')
    }
    catch(error){
        console.log(`Error:${error.message}`);
        process.exit(1);
    }
};
export default connectDataBase;