import Application from './Application';
import Address from 'address';

// Database
import './Database/MongoDBConnection';

// Connection Port
const Port = process.env.API_PORT || 8000;

// IP Address
// const IPAddress = Address.ip();
// console.log(IPAddress);

// IPv6 Address
// const IPVAddress = Address.ipv6();
// console.log(IPVAddress);

// MAC Address
// Address.mac((Error, MACAddress) => {
//     console.log(MACAddress);
// });

Application.listen(Port, () => {
    console.log(`Server is running http://localhost:${Port}`);
});