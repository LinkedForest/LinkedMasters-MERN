import Mongoose from 'mongoose';

// Database MongoDB
const Database = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@hooksmasters.5xct6.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
const LocalDatabase = `mongodb://localhost:27017/${process.env.LOCAL_DATABASE_NAME}`;

Mongoose.connect(LocalDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
    dbName: 'LinkedMasters'
}).then().catch((Error) => {
    console.log('MongoDB Database Not Connected');
});