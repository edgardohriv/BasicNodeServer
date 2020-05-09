import Server from './server';
import router from  './router';

const PORT : number = 8090;
const server = Server.init(PORT);
server.app.use(router);

server.start(()=>{console.log(`edgardo server listening on : http://localhost:${PORT}....`);});