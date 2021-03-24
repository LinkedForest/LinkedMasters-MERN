import Application from "./Application";

// Database
import './Database/MongoDBConnection';

const Port = process.env.API_PORT || 8000;

Application.listen(Port, () => {
    console.log(`Server is running http://localhost:${Port}`);
});