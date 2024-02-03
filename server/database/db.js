import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async ()=>{
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-plk8g4b-shard-00-00.7kw0alz.mongodb.net:27017,ac-plk8g4b-shard-00-01.7kw0alz.mongodb.net:27017,ac-plk8g4b-shard-00-02.7kw0alz.mongodb.net:27017/?ssl=true&replicaSet=atlas-ezfkgl-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with databse', error.message);
    }
}

export default Connection;