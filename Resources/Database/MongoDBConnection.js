import Mongoose from 'mongoose';

// Database MongoDB
const Database = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@hooksmasters.5xct6.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
const LocalDatabase = `mongodb://localhost:27017/${process.env.LOCAL_DATABASE_NAME}`;

Mongoose.connect(LocalDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'HooksMasters'
}).then(() => {
    console.log('MongoDB Database Connected');
}).catch((Error) => {
    console.log('MongoDB Database Not Connected');
});